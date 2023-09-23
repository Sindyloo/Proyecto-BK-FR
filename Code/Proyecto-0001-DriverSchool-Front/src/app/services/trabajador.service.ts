import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  private urlApi = 'https://localhost:44370/Trabajador';

  constructor(private http: HttpClient) { }

  listarTrabajador = (): Observable<any> => {
    return this.http.get<any>(`${this.urlApi}/listarTrabajador`)
  };

  convertObjectToGetParams(params: any, keyParent: any = null): any {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(k => {
      if (params[k].constructor === {}.constructor) {
        Object.keys(params[k]).forEach(k2 => {
          let par = k + '.' + k2;
          if (params[k][k2] != null || params[k][k2] != undefined) {
            httpParams = httpParams.set(par, params[k][k2]);
          }
        });
      } else {
        if (params[k] != null || params[k] != undefined) {
          httpParams = httpParams.set(k, params[k]);
        }
      }
    });
    return httpParams;
  }
}
