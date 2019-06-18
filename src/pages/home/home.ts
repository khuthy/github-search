import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinderPage } from '../finder/finder';
import { SearchProvider } from '../../providers/search/search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private searchProvider: SearchProvider) {
    
  }

  getStarted() {
    this.navCtrl.push(FinderPage);
  }

}
