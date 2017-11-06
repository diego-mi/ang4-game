import {Player} from "../model/player";

export class HitPlayerService {

  hitDamage: number = 20;

  constructor() {}

  public hit(player): void {
    this.setDamageToPlayerInjured(player);
  }

  private setDamageToPlayerInjured(player: Player): void {
    player.life -= this.hitDamage;
  }

}
