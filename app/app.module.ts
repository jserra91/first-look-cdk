import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginServiceComponent, LoginServiceService } from './login-service/login-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent],
  entryComponents: [LoginServiceComponent]
})
export class AppModule { }
