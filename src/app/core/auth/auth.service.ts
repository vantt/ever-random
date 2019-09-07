import {Injectable} from '@angular/core';
import * as EverNote from 'evernote';
<<<<<<< HEAD
import {Router} from '@angular/router';

const CONSUMER_KEY = 'vantt';
const CONSUMER_SECRET = '2384d29a4eed8173';
=======
import {ActivatedRoute, Router} from '@angular/router';
>>>>>>> 4cb1b7b... new code

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD
  private oauthToken: string;
  private oauthSecret: string;
=======
>>>>>>> 4cb1b7b... new code
  private accessToken: string;
  private expiresAt: number;
  private callbackUrl = 'http://localhost:4200/oauth_callback'; // your endpoint

<<<<<<< HEAD
  constructor(public router: Router) {
    this.oauthToken = sessionStorage.getItem('oauthToken');
    this.oauthSecret = sessionStorage.getItem('oauthSecret');
    this.accessToken = localStorage.getItem('accessToken');
  }

  public getEverNoteClient() {
    if (!this.hasValidToken()) {
      this.router.navigate(['/']);
    }

    return new EverNote.Client({
      token: this.accessToken,
      sandbox: true,
      china: false,
    });
  }

  public hasValidToken(): boolean {
    return this.accessToken !== '' && new Date().getTime() < this.expiresAt;
  }

  public getAccessToken(): string {
    if (!this.hasValidToken())  {
      this.router.navigate(['/']);
    }

    return this.accessToken;
  }

  public isAuthenticated(): boolean {
    return this.hasValidToken();
  }

  public tryLogin(): void {
    const client = this.getAuthClient();
=======
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
  }

  private static getEverNoteClient(): any {
    return new EverNote.Client({
      consumerKey: 'my-consumer-key',
      consumerSecret: 'my-consumer-secret',
      sandbox: true, // change to false when you are ready to switch to production
      china: false, // change to true if you wish to connect to YXBJ - most of you won't
    });
  }

  public login(): void {
    client = this.getEverNoteClient();
>>>>>>> 4cb1b7b... new code
    client.getRequestToken(this.callbackUrl, (error, oauthToken, oauthTokenSecret) => {
      if (error) {
        // do your error handling here
      }
<<<<<<< HEAD

      // store your token here somewhere - for this example we use req.session
      this.oauthToken = oauthToken;
      this.oauthSecret = oauthTokenSecret;
      sessionStorage.setItem('oauthToken', oauthToken);
      sessionStorage.setItem('oauthTokenSecret', oauthTokenSecret);

      this.router.navigateByUrl(client.getAuthorizeUrl(oauthToken));
    });
  }

  public receiveAccessToken(oauthVerifier: string): void {
    const client = this.getAuthClient();
    client.getAccessToken(this.oauthToken, this.oauthSecret, oauthVerifier,
      (error, oauthToken, oauthTokenSecret, results) => {
        if (error) {
          // do your error handling
        } else {
          this.accessToken = oauthToken;
          localStorage.setItem('accessToken', oauthToken);
          this.router.navigate(['/']);
        }
      });
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenExpiresAt');

    this.accessToken = null;
    this.expiresAt = null;

    // Go back to the home route
    this.router.navigate(['/']);
  }

  private getAuthClient() {
    return new EverNote.Client({
      consumerKey: CONSUMER_KEY,
      consumerSecret: CONSUMER_SECRET,
      sandbox: true, // change to false when you are ready to switch to production
      china: false, // change to true if you wish to connect to YXBJ - most of you won't
    });
=======
      // store your token here somewhere - for this example we use req.session
      req.session.oauthToken = oauthToken;
      req.session.oauthTokenSecret = oauthTokenSecret;
      res.redirect(client.getAuthorizeUrl(oauthToken)); // send the user to Evernote
    });
  }

  public handleAuthentication(): void {
    client.getAccessToken(req.session.oauthToken,
      req.session.oauthTokenSecret,
      req.query.oauth_verifier,
      function(error, oauthToken, oauthTokenSecret, results) {
        if (error) {
          // do your error handling
        } else {
          // oauthAccessToken is the token you need;
          var authenticatedClient = new Evernote.Client({
            token: oauthToken,
            sandbox: true,
            china: false,
          });
          var noteStore = authenticatedClient.getNoteStore();
          noteStore.listNotebooks().then(function(notebooks) {
            console.log(notebooks); // the user's notebooks!
          });
        }

    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.accessToken = authResult.accessToken;
        this.expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.router.navigate(['/dashboard']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }




  public logout(): void {
    // Remove tokens and expiry time from localStorage
    this.accessToken = null;
    this.expiresAt = null;
    // Go back to the home route

    this.router.navigate(['/']);
    this.router.getCurrentNavigation().
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return new Date().getTime() < this.expiresAt;
>>>>>>> 4cb1b7b... new code
  }
}
