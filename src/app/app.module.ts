import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarFooterComponent } from './components/navbar-footer/navbar-footer.component';

import { AngularFireModule } from '@angular/fire'; //ok
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { LoginComponent } from './components/administrator/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { InformationComponent } from './components/information/information.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { SupportComponent } from './components/support/support.component';
import { EventsComponent } from './components/events/events.component';
import { GaleryComponent } from './components/galery/galery.component';
import { PublicPoliticsComponent } from './components/public-politics/public-politics.component';
import { PostUserComponent } from './components/administrator/post-user/post-user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/administrator/register/register.component';
//denisse
import { HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './components/administrator/images/images.component';
import { ImageListComponent } from './components/administrator/images/image-list/image-list.component';
import { ImageComponent } from './components/administrator/images/image/image.component';
import { HomeComponent } from './components/home/home.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { TestimonyPipe } from './pipes/testimony.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // DFF


@NgModule({
  declarations: [
    AppComponent,
    NavbarFooterComponent,
    LoginComponent,
    AboutComponent,
    InformationComponent,
    OrganizationComponent,
    SupportComponent,
    EventsComponent,
    GaleryComponent,
    PublicPoliticsComponent,
    PostUserComponent,
    AdminComponent,
    RegisterComponent,
    ImagesComponent,
    ImageListComponent,
    ImageComponent,
    HomeComponent,
    PaginatePipe,
    TestimonyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule ,
    NgbModule //  DFF                                                                                                                                                  

  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})

export class AppModule { }

