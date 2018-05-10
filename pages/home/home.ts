import { ContatoPage } from './../contato/contato';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutosPage } from '../produtos/produtos';
import { InstitucionalPage } from '../institucional/institucional';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openContatoPage(){
    this.navCtrl.push(ContatoPage);
  }
  openInstitucionalPage(){
    this.navCtrl.push(InstitucionalPage);
  }
  openProdutosPage(){
    this.navCtrl.push(ProdutosPage);
  }

}
