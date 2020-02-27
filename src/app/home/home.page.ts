import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private componentes: Componente[];

    constructor() {
        this.getJson().then(r => '');
    }

    async getJson() {
        const respuesta = await fetch('https://raw.githubusercontent.com/rcuestasjb/motos/master/ducati.json');
        this.componentes = await respuesta.json();
    }


}

// tslint:disable-next-line:no-empty-interface
interface Componente {
    id: number;
    marca: string;
    modelo: string;
    any: number;
    foto: string;
    precio: string;
}

