import {Player} from "../model/player";

export class NewPlayerService {

  idPlayerOne: number = 1;
  idPlayerTwo: number = 2;

  constructor() {}

  public getNewPlayerOne(): Player {
    return this.getNewPlayer(this.idPlayerOne);
  }

  public getNewPlayerTwo(): Player {
    return this.getNewPlayer(this.idPlayerTwo);
  }

  public getNewPlayer(id: number): Player {
    let player = new Player();

    this.setId(id, player);
    this.setFullLife(player);

    return player;
  }

  private setId(id: number, player: Player): void {
    player.id = id;
  }

  private setFullLife(player: Player): void {
    player.life = 100;
  }

}
