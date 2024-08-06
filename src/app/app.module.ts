import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {ActividadesPage} from "../pages/actividades/actividades";
import {MisActividadesPage} from "../pages/mis-actividades/mis-actividades";
import {SetupPage} from "../pages/setup/setup";
import {ActividadDetailPage} from "../pages/actividad-detail/actividad-detail";
import {UserDetailPage} from "../pages/user-detail/user-detail";
import { RemoteServicesProvider } from '../providers/remote-services/remote-services';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {IonicStorageModule} from "@ionic/storage";
import {OneSignal} from "@ionic-native/onesignal";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    ActividadesPage,
    MisActividadesPage,
    SetupPage,
    ActividadDetailPage,
    UserDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    ActividadesPage,
    MisActividadesPage,
    SetupPage,
    ActividadDetailPage,
    UserDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServicesProvider
  ]
})
export class AppModule {}
