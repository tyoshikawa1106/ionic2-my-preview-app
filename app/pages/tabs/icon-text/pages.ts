import {NavController, NavParams} from 'ionic-angular';
import {Page, ViewController, Platform} from 'ionic-angular';


@Page({
  template:
  '<ion-navbar *navbar primary>' +
      '<button menuToggle>' +
        '<ion-icon name="menu"></ion-icon>' +
      '</button>' +
      '<ion-title>Tabs(IconText)</ion-title>' +
    '</ion-navbar>' +
  '<ion-content>' +
  '</ion-content>'
})
class TabIconTextPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  onPageWillEnter() {
    console.log('enter');
    document.getElementById('md-tabs-icon-text').style.display = "block";
    document.getElementById('md-only').style.display = "none";
  }
}


@Page({
  template:
  '<ion-tabs class="tabs-icon-text">' +
  '<ion-tab tabIcon="water" tabTitle="Water" [root]="tabOne"></ion-tab>' +
  '<ion-tab tabIcon="leaf" tabTitle="Life" [root]="tabTwo"></ion-tab>' +
  '<ion-tab tabIcon="flame" tabTitle="Fire" [root]="tabThree"></ion-tab>' +
  '<ion-tab tabIcon="magnet" tabTitle="Force" [root]="tabFour"></ion-tab>' +
  '</ion-tabs>',
})
export class TabsIconTextPage {
  tabOne = TabIconTextPage;
  tabTwo = TabIconTextPage;
  tabThree = TabIconTextPage;
  tabFour = TabIconTextPage;

  onPageWillLeave() {
    document.getElementById('md-tabs-icon-text').style.display = "none";
    document.getElementById('md-only').style.display = "block";
  }

}
