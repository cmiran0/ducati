import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.page.html',
    styleUrls: ['./detalle.page.scss'],
})
export class DetallePage {

    public arg: ParamMap;

    constructor(private activatedRoute: ActivatedRoute) {
        this.arg = this.activatedRoute.snapshot.paramMap;
    }

}


