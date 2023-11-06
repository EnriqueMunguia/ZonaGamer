import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactenosComponent } from './public/contactenos/contactenos.component';
import { InicioComponent } from './public/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './private/user/user-register/user-register.component';
import { UserLoginComponent } from './private/user/user-login/user-login.component';
import { ModeradoresComponent } from './public/moderadores/moderadores.component';
import { CaptchaComponent } from './public/captcha/captcha.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactenosComponent,
    InicioComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ModeradoresComponent,
    CaptchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
