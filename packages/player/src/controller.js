export class PlayerController {

  constructor(player) {
    this.player = player;
  }


  play() {
    this.player.play();
  }


  pause() {
    this.player.pause();
  }


  stop() {
    this.player.stop();
  }

}
