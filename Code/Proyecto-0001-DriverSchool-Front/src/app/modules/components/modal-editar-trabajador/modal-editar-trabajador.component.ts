import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-editar-trabajador',
  templateUrl: './modal-editar-trabajador.component.html',
  styleUrls: ['./modal-editar-trabajador.component.css']
})


export class ModalEditarTrabajadorComponent implements OnInit {
  form!: FormGroup;
  idTrabajador = '';
  constructor(
    private formBuilder: FormBuilder,
    // private swallService: SwallService,
    public dialogRef: MatDialogRef<ModalEditarTrabajadorComponent>
  ) {}

  async ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      puesto: null,
      salario: null,
      nombre: null,
      edad: null,
      nombreUsuario: null
    });
  }

  async loadDatos() {
    if (!this.idTrabajador) {
      return;
    }

    const request = { idTrabajador: this.idTrabajador };

    // const response = await this.tra.obtenerEquipoInvolucradoId(request).toPromise();

    // this.form.patchValue(response.data);
  }
}
