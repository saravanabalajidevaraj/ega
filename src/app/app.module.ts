import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule  } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
//import { NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WelcomeLayoutComponent } from './layouts/welcome-layout/welcome-layout.component';
import { NavbarComponent } from './shared/common/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import {AlertService} from './_services/alert.service';

import {DownloadService} from './_services/download.service';

import {UtilService} from './_services/util.service';
import {PdfViewerModule } from 'ng2-pdf-viewer';
//import {PdfViewerComponent } from 'ng2-pdf-viewer';

import { ToastyModule } from 'ng2-toasty';

@NgModule({
schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WelcomeLayoutComponent,
    NavbarComponent,  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    PdfViewerModule,
   // PdfViewerComponent 
   ToastyModule
  ],
  exports:[
   PdfViewerModule
  ],
  providers: [
      AlertService,
      DownloadService,
      UtilService,
     // PdfViewerComponent,
     
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
