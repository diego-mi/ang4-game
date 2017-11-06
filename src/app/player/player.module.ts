import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlayerComponent} from './component/player/player.component';
import {NewPlayerService} from './service/NewPlayerService';
import {HitPlayerService} from './service/HitPlayerService';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlayerComponent
  ],
  providers: [
    NewPlayerService,
    HitPlayerService,
  ],
  exports: [
    PlayerComponent
  ],
})
export class PlayerModule {
}
