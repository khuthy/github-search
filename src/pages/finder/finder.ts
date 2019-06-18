import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';


/**
 * Generated class for the FinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finder',
  templateUrl: 'finder.html',
})
export class FinderPage {
   profile: any[];
   repos: any[];

    q: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private searchProvider: SearchProvider)  {
     
  }

 
  setData() {
    this.searchProvider.searchUsers(this.q);
    this.searchProvider.getData().subscribe(response => {
      console.log(response);
          this.profile = response;
    });

    this.searchProvider.getRepos().subscribe(res => {
      console.log(res);
          this.repos = res;
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinderPage');

  }

 

 

}
