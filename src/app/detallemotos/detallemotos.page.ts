import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-detallemotos',
    templateUrl: './detallemotos.page.html',
    styleUrls: ['./detallemotos.page.scss'],
})
export class DetallemotosPage {
    private componentes: MyMotos[];
    public arg: ParamMap;

    constructor(private activatedRoute: ActivatedRoute) {
        this.arg = this.activatedRoute.snapshot.paramMap;
        this.getJson().then(r => '');
    }

    async getJson() {
        const respuesta = await fetch(this.arg.get('url'));
        this.componentes = await respuesta.json();
    }


}


