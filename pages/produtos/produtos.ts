import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  public materiais;

  constructor(public NavController: NavController){

    this.materiais=[
      {nome:"Cimento", preco:80},
      {nome:"Tinta", preco:70},
      {nome:"Rejunto", preco:35},
      {nome:"Rachinha", preco:20},
      {nome:"Brita", preco:30},
      {nome:"Areia", preco:25},
      {nome:"Manta", preco:10},
      {nome:"Prego", preco:5},
      {nome:"Tubo Galvanizado", preco:19},
      


    ];

  }


  


  
}
