import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//llamdo de componentes
import { CanalUnoComponent } from './components/canal-uno/canal-uno.component';
import { CanalGaleriaComponent } from './components/canal-galeria/canal-galeria.component';
import { VideoComponent } from './components/video/video.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';



const routes: Routes = [

  { path: '',component:InicioComponent},
  { path: 'formulario',component:FormularioComponent},
  { path: 'video',component:VideoComponent},
  { path: 'canal', component: CanalUnoComponent },
  { path: 'galeria',component:CanalGaleriaComponent},
  { path: 'crear-producto',component:CrearProductoComponent},
  { path: 'listar-producto',component:ListarProductoComponent},
  { path: 'editar-producto/:id',component:CrearProductoComponent},
  { path: '404',component:Pagina404Component},
  { path: '**',redirectTo:'404',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
