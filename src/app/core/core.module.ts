import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from './data.service';
import {AuthService} from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule
  ],
  providers: [
    DataService,
    AuthService,
  ],
})
export class CoreModule {
}
