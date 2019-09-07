import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from './data.service';
<<<<<<< HEAD
=======
import {AuthService} from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';

>>>>>>> 4cb1b7b... new code

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule
  ],
  providers: [
    DataService,
<<<<<<< HEAD
=======
    AuthService,
>>>>>>> 4cb1b7b... new code
  ],
})
export class CoreModule {
}
