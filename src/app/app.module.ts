import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FakeBackendService } from './fake-backend/fake-backend.service';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [AppComponent, TopMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      apiBase: 'api/',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
