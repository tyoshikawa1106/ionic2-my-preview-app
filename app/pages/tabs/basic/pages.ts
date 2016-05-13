import {NavController, NavParams} from 'ionic-angular';
import {Page, ViewController, Platform} from 'ionic-angular';


@Page({
  template:
    '<ion-navbar *navbar primary>' +
      '<button menuToggle>' +
        '<ion-icon name="menu"></ion-icon>' +
      '</button>' +
      '<ion-title>Tabs(Badges)</ion-title>' +
    '</ion-navbar>' +
    '<ion-content>' +
    '</ion-content>'
})
class TabTextPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Page({
  template:
    '<ion-tabs class="tabs-basic">' +
      '<ion-tab tabTitle="Music" [root]="tabOne"></ion-tab>' +
      '<ion-tab tabTitle="Movies" [root]="tabTwo"></ion-tab>' +
      '<ion-tab tabTitle="Games" [root]="tabThree"></ion-tab>' +
    '</ion-tabs>',
})
export class TabsBasicPage {
  tabOne = TabTextPage;
  tabTwo = TabTextPage;
  tabThree = TabTextPage;
}
