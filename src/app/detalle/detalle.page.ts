import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.page.html',
    styleUrls: ['./detalle.page.scss'],
})
export class DetallePage {
    public arg: ParamMap;

    constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController, private router: Router) {
        this.arg = this.activatedRoute.snapshot.paramMap;
    }


    async presentAlert(idMoto) {
        const alert = await this.alertController.create({
            header: 'Warning',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Yes', cssClass: 'secondary', handler: (blah) => {
                        this.deleteMoto(idMoto);
                        this.goHome();
                    }
                }, {
                    text: 'No', cssClass: 'secondary'
                }
            ]
        });
        await alert.present();
    }

    goHome(): void {
        this.router.navigate(['/home']).then(r => '');
    }

    deleteMoto(idMoto) {
        const url = 'https://motos.puigverd.org/moto/' + idMoto;
        fetch(url, {method: 'DELETE'}).then(response => {
            this.router.navigateByUrl('/home');
        });
    }


}


