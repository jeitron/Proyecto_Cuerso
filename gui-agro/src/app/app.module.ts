import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { RegistrousuComponent } from './components/pages/registrousu/registrousu.component';
import { ListarusuComponent } from './components/pages/listarusu/listarusu.component';
import { ActualizarusuComponent } from './components/pages/actualizarusu/actualizarusu.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { NosotrosComponent } from './components/pages/nosotros/nosotros.component';
import { SesionComponent } from './components/pages/sesion/sesion.component';
import { ComprarComponent } from './components/pages/comprar/comprar.component';
import { ComidaComponent } from './components/pages/comida/comida.component';
import { MedicinaComponent } from './components/pages/medicina/medicina.component';
import { VenenoComponent } from './components/pages/veneno/veneno.component';
import { HerramientasComponent } from './components/pages/herramientas/herramientas.component';
import { AnimalesComponent } from './components/pages/animales/animales.component';
import { MaquinariaComponent } from './components/pages/maquinaria/maquinaria.component';
import { TalabarteriaComponent } from './components/pages/talabarteria/talabarteria.component';
import { SemillasComponent } from './components/pages/semillas/semillas.component';
import { ServiciosComponent } from './components/pages/servicios/servicios.component';
import { AdminpanelComponent } from './components/pages/adminpanel/adminpanel.component';
import { RegistrarproComponent } from './components/pages/registrarpro/registrarpro.component';
import { ActualizarproComponent } from './components/pages/actualizarpro/actualizarpro.component';
import { ListarproComponent } from './components/pages/listarpro/listarpro.component';
import { ListarnotComponent } from './components/pages/listarnot/listarnot.component';
import { RegistrarnotComponent } from './components/pages/registrarnot/registrarnot.component';
import { VerproductoComponent } from './components/pages/verproducto/verproducto.component';
import { UsupanelComponent } from './components/pages/usupanel/usupanel.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { CambiarpassComponent } from './components/pages/cambiarpass/cambiarpass.component';
import { ComprausuComponent } from './components/pages/comprausu/comprausu.component';
import { FavoritosComponent } from './components/pages/favoritos/favoritos.component';








@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    RegistrousuComponent,
    ListarusuComponent,
    ActualizarusuComponent,
    FooterComponent,
    ContactoComponent,
    NosotrosComponent,
    SesionComponent,
    ComprarComponent,
    ComidaComponent,
    MedicinaComponent,
    VenenoComponent,
    HerramientasComponent,
    AnimalesComponent,
    MaquinariaComponent,
    TalabarteriaComponent,
    SemillasComponent,
    ServiciosComponent,
    AdminpanelComponent,
    RegistrarproComponent,
    ActualizarproComponent,
    ListarproComponent,
    ListarnotComponent,
    RegistrarnotComponent,
    VerproductoComponent,
    UsupanelComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    CambiarpassComponent,
    ComprausuComponent,
    FavoritosComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


