import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SecondPage } from '../modals/second/second.page';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {


  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }



  async openmodal() {

    const modal = await this.modalController.create({
      component: SecondPage
    });

    return await modal.present();

  }





}
