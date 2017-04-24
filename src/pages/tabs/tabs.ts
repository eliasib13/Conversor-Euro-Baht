import { Component } from '@angular/core';

import { EuroBahtPage } from '../euroBaht/euroBaht';
import { BahtEuroPage } from '../bahtEuro/bahtEuro';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EuroBahtPage;
  tab2Root = BahtEuroPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
