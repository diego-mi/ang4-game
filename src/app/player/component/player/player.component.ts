import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../../model/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  positionAnimation = 1;

  currentAnimation = 'idle';

  @Input() player: Player;
  @Input() gameOver: boolean;
  @Output() hitRivalPlayer: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.animationIdle();
  }

  hitRival() {
    this.hitRivalPlayer.emit();
    this.changeAninationAfterAttack();
  }

  animationIdle(): void {
    setInterval(() => { this.changeAnimation(); }, 110);
  }

  changeAnimation() {

    if (this.player.isDead() && this.currentAnimation === 'dead' && this.positionAnimation === 10) {
      return false;
    }

    if (this.positionAnimation === 10) {
      this.changeAninationAfterCicle();
    }

    if (this.positionAnimation < 10) {
      this.positionAnimation += 1;
    }
  }

  changeAnimationToAttack() {
    this.positionAnimation = 1;
    this.currentAnimation = 'attack';
  }

  changeAnimationToIdle() {
    this.positionAnimation = 1;
    this.currentAnimation = 'idle';
  }

  changeAnimationToDead() {
    this.positionAnimation = 1;
    this.currentAnimation = 'dead';
  }

  changeAninationAfterAttack() {
    if (this.player.isDead()) {
      this.changeAnimationToDead();
    } else {
      this.changeAnimationToAttack();
    }
  }

  changeAninationAfterCicle() {
    if (this.player.isDead()) {
      this.changeAnimationToDead();
    } else {
      this.changeAnimationToIdle();
    }
  }
}
