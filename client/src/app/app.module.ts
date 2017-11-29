import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';

import { VehicleService } from "./vehicle.service";


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    SidebarComponent,
    SettingsComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
