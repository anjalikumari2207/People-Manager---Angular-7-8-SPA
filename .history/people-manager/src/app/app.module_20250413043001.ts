import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { EditComponent } from './views/edit/edit.component';
import { DeleteComponent } from './views/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
