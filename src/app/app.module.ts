import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RialToTomanPipe } from '../assets/pipes/rial-to-toman.pipe';
import {NgxMaskModule, IConfig} from 'ngx-mask'

export const options: Partial<IConfig> = {
  thousandSeparator: ","
};

@NgModule({
  declarations: [
    AppComponent,
    RialToTomanPipe
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(options)
  ],
  exports:[
    NgxMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
