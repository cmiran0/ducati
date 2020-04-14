import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-altamotofoto',
    templateUrl: './altamotofoto.page.html',
    styleUrls: ['./altamotofoto.page.scss'],
})
export class AltamotofotoPage implements OnInit {
    marca: string;
    modelo: string;
    any: string;
    precio: string;
    image;

    form = new FormData;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    async generarForm() {
        this.image = (document.getElementsByName('foto')[0] as HTMLInputElement).files[0];
        this.form.append('foto', this.image);
        this.form.append('marca', this.marca);
        this.form.append('modelo', this.modelo);
        this.form.append('ano', this.any);
        this.form.append('precio', this.precio);

    }

    async addBike() {
        this.generarForm();
        fetch('https://motos.puigverd.org/moto/foto', {
            method: 'POST',
            body: this.form
        })
            .then(response => {
                console.log(response);
                this.router.navigate(['home']);
            });
    }
}
