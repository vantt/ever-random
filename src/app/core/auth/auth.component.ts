<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';
>>>>>>> 4cb1b7b... new code

@Component({
  selector: 'app-auth',
  template: '',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
<<<<<<< HEAD
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
=======
  private order: string;

  constructor(private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(filter(params => params.order)).subscribe(params => this.order = params.order);
>>>>>>> 4cb1b7b... new code
  }
}
