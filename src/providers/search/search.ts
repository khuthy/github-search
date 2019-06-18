
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {
  username: string;
  clientid: string = 'Iv1.a37b3b3d535e1a72';
  clientsecret: string = 'e70b8d81d7930e91f7f3f52e076efe9fabcd0702';
  url: string = 'https://api.github.com/users/';

  constructor(public http: Http) {
    console.log('Hello SearchProvider Provider');

    this.username = 'khuthy';
  }

  getData() {
    return this.http.get(this.url +""+ this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }
  getRepos(){
    return this.http.get(this.url +""+ this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }

  searchUsers(username) {
      this.username = username;
  }

}
