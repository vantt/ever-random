import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  template: '',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private order: string;

  constructor(private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(filter(params => params.order)).subscribe(params => this.order = params.order);
  }
}
