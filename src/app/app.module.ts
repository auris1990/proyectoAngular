import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanalUnoComponent } from './components/canal-uno/canal-uno.component';
import { CanalGaleriaComponent } from './components/canal-galeria/canal-galeria.component';
import { VideoComponent } from './components/video/video.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ListarFormularioComponent } from './components/listar-formulario/listar-formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    CanalUnoComponent,
    CanalGaleriaComponent,
    VideoComponent,
    InicioComponent,
    FormularioComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    Pagina404Component,
    ListarFormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
