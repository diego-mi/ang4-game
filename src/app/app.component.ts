import { Component } from '@angular/core';
import {Player} from './player/model/player';
import {NewPlayerService} from './player/service/NewPlayerService';
import {HitPlayerService} from './player/service/HitPlayerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  player1: Player;
  player2: Player;

  playerLoser: Player;

  newPlayerService: NewPlayerService;
  hitPlayerService: HitPlayerService;

  gameOver = false;

  constructor(newPlayerService: NewPlayerService, hitPlayerService: HitPlayerService) {
    this.newPlayerService = newPlayerService;
    this.hitPlayerService = hitPlayerService;

    this.startGame();
  }

  public startGame(): void {
    this.player1 = this.newPlayerService.getNewPlayerOne();
    this.player2 = this.newPlayerService.getNewPlayerTwo();
    this.gameOver = false;
  }

  public restartGame(): void {
    this.startGame();
  }

  public playerOneHit(): void {
    this.hit(this.player2);
    this.hasWinner(this.player2);
  }

  public playerTwoHit(): void {
    this.hit(this.player1);
    this.hasWinner(this.player1);
  }

  private hasWinner(player: Player): void {
    if (this.afterHitPlayerDead(player)) {
      this.gameOver = true;
      this.playerLoser = player;
    }

  }

  private afterHitPlayerDead(player: Player): boolean {
    return player.isDead();
  }

  private hit(player: Player): void {
    this.hitPlayerService.hit(player);
  }
}
