import {Page, Loading, NavController} from 'ionic-angular';


@Page({
  templateUrl: './build/pages/loading/basic/template.html'
})
export class LoadingBasicPage {

  constructor(public nav: NavController) { }

  presentLoading() {
    let loading = Loading.create({
      content: "Please wait...",
      duration: 3000,
      dismissOnPageChange: true
    });
    this.nav.present(loading);
  }

}
