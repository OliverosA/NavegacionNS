import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component'
import { SecondPageComponent } from './second-page/second-page.component'
import { NewButton } from './button-new/button2.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, HomePageComponent, SecondPageComponent, NewButton],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
