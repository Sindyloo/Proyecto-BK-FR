import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoTrabajadorComponent } from './modules/listado-trabajador/listado-trabajador.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ListadoTrabajadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
