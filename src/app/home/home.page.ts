import {Component, OnDestroy, OnInit} from '@angular/core';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private componentes: MyMotos[];

    constructor() {
        this.getJson().then(r => '');
    }

    async getJson() {
        const respuesta = await fetch('https://motos.puigverd.org/motos');
        this.componentes = await respuesta.json();
    }




}



