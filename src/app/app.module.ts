import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // SharedModule,    
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
