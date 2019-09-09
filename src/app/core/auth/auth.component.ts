import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-auth',
  template: '',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private oauthVerifier: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      const authType = data[data.length - 1].path;

      if (authType === 'login') {
        // this.auth.tryLogin();
      } else if (authType === 'oauth_callback') {
        this.route.queryParams.subscribe(params => {
          // this.auth.receiveAccessToken(params.oauth_verifier);
        });
      }
    });
  }
}
