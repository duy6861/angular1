import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule      
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
