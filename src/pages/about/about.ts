import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private CHANGE_FACTOR : number = 36.7954756;

  public inputValue : number;
  public calculatedValue : number;

  constructor(public navCtrl: NavController) {
    
  }

  public inputChanged() {
    this.calculatedValue = this.inputValue / this.CHANGE_FACTOR;
  }

}
