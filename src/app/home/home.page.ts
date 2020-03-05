import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private componentes: MyMotos[];

    constructor() {

    }

    ionViewWillEnter() {
        this.getJson('http://motos.puigverd.org/motos').then(r => '');
    }

    async getJson(url) {
        const respuesta = await fetch(url);
        this.componentes = await respuesta.json();
    }




}



