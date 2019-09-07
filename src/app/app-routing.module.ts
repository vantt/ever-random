import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {BoardComponent} from './components/board/board.component';
import {AuthComponent} from './core/auth/auth.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'board', component: BoardComponent},
  {path: 'oauth_callback', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
