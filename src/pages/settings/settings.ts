import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public inputValue : number;
  private storage : Storage;
  public changeFactor : number;

  constructor(public navCtrl: NavController, storage : Storage, public sharedService : SharedService) {
    this.storage = storage;
  }

  public inputChanged() {
      this.changeFactor = this.inputValue;
      this.storage.set('changeType', this.changeFactor);
  }

  ionViewWillEnter() {
    this.storage.get('changeType').then((value) => {
      if (!value) {
        value = this.sharedService.defaultChangeFactor;
        this.storage.set('changeType', value);
      }
      this.changeFactor = parseFloat(value);
    });
  }

}
