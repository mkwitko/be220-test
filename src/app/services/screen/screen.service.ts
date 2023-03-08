import { Injectable } from '@angular/core';
import {
  LoadingController,
} from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  constructor(
    private toastr: ToastrService,
    private loadingController: LoadingController
  ) {}

  public async presentToast(message: string, type = '2', title?: string) {
    if (type === '1') {
      this.toastr.success(message, title, {
        closeButton: true,
        extendedTimeOut: 2000,
        progressBar: true,
      });
    } else if (type === '2') {
      this.toastr.error(message, title, {
        closeButton: true,
        extendedTimeOut: 2000,
        progressBar: true,
      });
    } else if (type === '3') {
      this.toastr.warning(message, title, {
        closeButton: true,
        extendedTimeOut: 2000,
        progressBar: true,
      });
    } else if (type === '4') {
      this.toastr.info(message, title, {
        closeButton: true,
        extendedTimeOut: 2000,
        progressBar: true,
      });
    }
  }

  async presentLoading(text = 'Aguarde...') {
    const loading = await this.loadingController.create({
      message: text,
    });
    await loading.present();
  }

  async dismissloading() {
    this.loadingController.dismiss();
  }
}