import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltamotofotoPage } from './altamotofoto.page';

const routes: Routes = [
  {
    path: '',
    component: AltamotofotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltamotofotoPageRoutingModule {}
