import { Component } from '@angular/core';


import {ActividadesPage} from "../actividades/actividades";
import {MisActividadesPage} from "../mis-actividades/mis-actividades";
import {SetupPage} from "../setup/setup";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ActividadesPage;
  tab2Root = MisActividadesPage;
  tab3Root = SetupPage;

  constructor() {

  }
}
