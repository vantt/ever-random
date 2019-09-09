import {Injectable} from '@angular/core';
import * as EverNote from 'evernote';
import {Router} from '@angular/router';

const CONSUMER_KEY = 'vantt';
const CONSUMER_SECRET = '2384d29a4eed8173';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private oauthToken: string;
  private oauthSecret: string;
  private accessToken: string;
  private expiresAt: number;
  private callbackUrl = 'http://localhost:4200/oauth_callback'; // your endpoint

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
    client.getRequestToken(this.callbackUrl, (error, oauthToken, oauthTokenSecret) => {
      if (error) {
        // do your error handling here
      }

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
  }
}
