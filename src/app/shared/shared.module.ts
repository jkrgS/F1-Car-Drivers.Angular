import { PrivateModule } from './../private/private.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '../helpers/interceptors/http-error.interceptor';
import { CommunicationService } from '../services/communication.service';

@NgModule({
  imports: [CommonModule, AngularFontAwesomeModule, RouterModule],
  declarations: [NavbarComponent, HomeComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    CommunicationService
  ],
  exports: [NavbarComponent, AngularFontAwesomeModule]
})
export class SharedModule {}
