export class Player {
  id: number;
  life: number;

  public isDead(): boolean {
    return this.life === 0;
  }
}
