import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-altamotofoto',
    templateUrl: './altamotofoto.page.html',
    styleUrls: ['./altamotofoto.page.scss'],
})
export class AltamotofotoPage implements OnInit {
    marca: string;
    modelo: string;
    any: string;
    foto: string;
    precio: number;

    constructor() {
    }

    ngOnInit() {
    }

    async addBike() {

    }
}
