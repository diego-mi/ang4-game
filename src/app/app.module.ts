import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LayoutCommonModule } from './layout-common/layout-common.module';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutCommonModule,
    PlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
