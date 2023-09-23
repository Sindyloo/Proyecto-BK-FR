import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ModalEditarTrabajadorComponent } from '../components/modal-editar-trabajador/modal-editar-trabajador.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listado-trabajador',
  templateUrl: './listado-trabajador.component.html',
  styleUrls: ['./listado-trabajador.component.css']
})
export class ListadoTrabajadorComponent implements OnInit {
  trabajadores: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private trabajadorService: TrabajadorService,
    private dialog: MatDialog,

  ) {}

  async ngOnInit() {
    this.listarTrabajador();
  }


  async listarTrabajador() {
    const response = await this.trabajadorService.listarTrabajador().toPromise();
    this.trabajadores = response;
    let data = { ...response.data };

  }

  editarTrabajador(){
    let dialogRef = this.dialog.open(ModalEditarTrabajadorComponent, {
      width: '50%',
      disableClose: true,
    });

    // dialogRef.componentInstance.idTrabajador = this.idTrabajador;
    // dialogRef.afterClosed().subscribe(x => {
    //   this.handleLoadGridPersonalAfectado(this.state.gridPersonalAfectado.source);
    // });
  }
}
