import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage {
    myForm: FormGroup;

    constructor(public navCtrl: NavController,
                public formBuilder: FormBuilder
    ) {
        this.myForm = this.createMyForm();
    }


    saveData() {
        console.log(this.myForm.value);
    }

    private createMyForm() {
        return this.formBuilder.group({
            marca: ['', Validators.required],
            modelo: ['', Validators.required],
            any: ['', Validators.required],
            foto: ['', Validators.required],
            precio: ['', Validators.required],
        });
    }
}
