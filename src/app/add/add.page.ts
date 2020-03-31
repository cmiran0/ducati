import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage {
    marca: string;
    modelo: string;
    any: string;
    foto: string;
    precio: number;

    constructor(private router: Router) {
    }

    goHome() {
        this.router.navigate(['home/todas']).then(r => console.log(r));
    }

    async addBike() {
        fetch('https://motos.puigverd.org/moto', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                marca: this.marca,
                modelo: this.modelo,
                year: this.any,
                foto: this.foto,
                precio: this.precio + ' $',
            })
        })
            .then(response => {
                this.goHome();
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }


}
