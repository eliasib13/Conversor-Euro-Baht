import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'page-baht-euro',
  templateUrl: 'bahtEuro.html'
})
export class BahtEuroPage {
  private storage : Storage;

  public inputValue : number;
  public calculatedValue : number;
  private changeFactor : number;

  constructor(public navCtrl: NavController, storage: Storage, public sharedService : SharedService) {
    this.storage = storage;
  }

  public inputChanged() {
    this.calculatedValue = (this.inputValue / this.changeFactor) || 0;
  }

  ionViewWillEnter() {
    this.storage.get('changeType').then((value) => {
      if (!value) {
        value = this.sharedService.defaultChangeFactor;
        this.storage.set('changeType', value);
      }
      this.changeFactor = parseFloat(value);

      this.inputChanged();
    });
  }

}
