import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxListModule, IgxCalendarModule, IgxCardModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    DashboardsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxListModule,
    IgxCalendarModule,
    FormsModule,
    IgxCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
