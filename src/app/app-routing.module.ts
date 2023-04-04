import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinerComponent } from './joiner/joiner.component';
import { LandingpageComponent } from './landing/landingpage/landingpage.component';
import { MenupagecComponent } from './menupage/menupagec/menupagec.component';
import { MenupagedComponent } from './menupage/menupaged/menupaged.component';
import { MenupagefComponent } from './menupage/menupagef/menupagef.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenucComponent } from './pages/menuc/menuc.component';
import { MenudComponent } from './pages/menud/menud.component';
import { MenufComponent } from './pages/menuf/menuf.component';

const routes: Routes = [
  {path:'',component:JoinerComponent,
  children:[
   {path:'',component:LandingpageComponent},
   {path:'landingpage',component:LandingpageComponent},
   {path:'contact',component:ContactComponent},
   {path:'about',component:AboutComponent},
   {path:'menuc',component:MenucComponent},
   {path:'menud',component:MenudComponent},
   {path:'menuf',component:MenufComponent},
   {path:'menu',component:MenuComponent},
   {path:'gallery',component:GalleryComponent},
   {path:'menuc/:id',component:MenupagecComponent},
   {path:'menud/:id',component:MenupagedComponent},
   {path:'menuf/:id',component:MenupagefComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
