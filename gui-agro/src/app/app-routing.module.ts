import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RegistrousuComponent } from './components/pages/registrousu/registrousu.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { ListarusuComponent} from './components/pages/listarusu/listarusu.component';
import { ActualizarusuComponent } from './components/pages/actualizarusu/actualizarusu.component';
import { ContactoComponent} from './components/pages/contacto/contacto.component';
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
import { LoginComponent } from './components/pages/login/login.component';  
import { LogoutComponent } from './components/pages/logout/logout.component';
import { AuthGaurdService } from '../app/services/auth-gaurd.service';
import { UsupanelComponent } from './components/pages/usupanel/usupanel.component';
import { CambiarpassComponent } from './components/pages/cambiarpass/cambiarpass.component';
import { ComprausuComponent } from './components/pages/comprausu/comprausu.component';
import { FavoritosComponent } from './components/pages/favoritos/favoritos.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'registrousu', component: RegistrousuComponent },
{ path: 'productos', component: ProductosComponent, canActivate:[AuthGaurdService] },
{ path: 'listarusu', component: ListarusuComponent, canActivate:[AuthGaurdService] },
{ path: 'actualizarusu', component: ActualizarusuComponent, canActivate:[AuthGaurdService] },
{ path: 'contacto', component: ContactoComponent},
{ path: 'nosotros', component: NosotrosComponent},
{ path: 'sesion', component: SesionComponent},
{ path: 'comprar' , component: ComprarComponent},
{ path: 'comida', component: ComidaComponent },
{ path: 'medicina', component: MedicinaComponent },
{ path: 'veneno', component: VenenoComponent },
{ path: 'herramientas', component: HerramientasComponent },
{ path: 'animales', component: AnimalesComponent },
{ path: 'maquinaria', component: MaquinariaComponent },
{ path: 'talabarteria', component: TalabarteriaComponent },
{ path: 'semillas', component: SemillasComponent},
{ path: 'servicios', component: ServiciosComponent },
{ path: 'adminpanel', component: AdminpanelComponent, canActivate:[AuthGaurdService]},
{ path: 'registrarpro', component: RegistrarproComponent},
{ path: 'actualizarpro', component: ActualizarproComponent, canActivate:[AuthGaurdService]},
{ path: 'listarpro', component: ListarproComponent, canActivate:[AuthGaurdService]},
{ path: 'listarnot', component: ListarnotComponent, canActivate:[AuthGaurdService]},
{ path: 'registrarnot', component: RegistrarnotComponent, canActivate:[AuthGaurdService]},
{ path: 'verproducto', component: VerproductoComponent},
{ path: 'login', component: LoginComponent},
{ path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
{ path: 'usupanel', component: UsupanelComponent},
{ path: 'cambiarpass', component: CambiarpassComponent},
{ path: 'comprausu', component: ComprausuComponent},
{ path: 'favoritos', component: FavoritosComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
