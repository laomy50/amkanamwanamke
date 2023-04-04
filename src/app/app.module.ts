import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FooterComponent } from './linker/footer/footer.component';
import { NavComponent } from './linker/nav/nav.component';
import { JoinerComponent } from './joiner/joiner.component';
import { LandingpageComponent } from './landing/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenufComponent } from './pages/menuf/menuf.component';
import { MenudComponent } from './pages/menud/menud.component';
import { MenucComponent } from './pages/menuc/menuc.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupagecComponent } from './menupage/menupagec/menupagec.component';
import { MenupagedComponent } from './menupage/menupaged/menupaged.component';
import { MenupagefComponent } from './menupage/menupagef/menupagef.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LoginComponent } from './Admin/login/login.component';
import { DashComponent } from './Admin/dash/dash.component';
import { ContactsComponent } from './Admin/contacts/contacts.component';
import { StaffComponent } from './Admin/staff/staff.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    FooterComponent,
    NavComponent,
    JoinerComponent,
    LandingpageComponent,
    MenufComponent,
    MenudComponent,
    MenucComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    MenupagecComponent,
    MenupagedComponent,
    MenupagefComponent,
    GalleryComponent,
    LoginComponent,
    DashComponent,
    ContactsComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatCardModule,
    MatRadioModule,
    HttpClientModule,
    MatFormFieldModule,
    MatListModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,    
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    MatRadioModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    DragDropModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
