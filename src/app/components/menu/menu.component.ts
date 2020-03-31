import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

    private componentes: MyMenu[] = [
        {
            foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ducati_red_logo.PNG/592px-Ducati_red_logo.PNG',
            marca: 'Ducati',
            url: 'https://motos.puigverd.org/motos?marca=Ducati'
        },
        {
            foto: 'https://pngimage.net/wp-content/uploads/2018/06/yamahapng-2.png',
            marca: 'Yamaha',
            url: 'https://motos.puigverd.org/motos?marca=Yamaha'
        },
        {
            foto: 'https://www.electromotos.net/wp-content/uploads/2018/01/honda-600x400.png',
            marca: 'Honda',
            url: 'https://motos.puigverd.org/motos?marca=Honda'
        },
        {
            foto: 'https://www.nicepng.com/png/detail/67-678021_llantas-llantas-para-motos-llantas-kingstone-llantas-llantas.png',
            marca: 'All',
            url: 'https://motos.puigverd.org/motos'
        },
    ];

    constructor() {
    }
}

