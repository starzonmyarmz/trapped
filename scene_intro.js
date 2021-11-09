class Intro {
  constructor() {
    this.start = millis()
  }

  draw() {
    background(0)

    fill(128)
    textSize(12)
    textAlign(CENTER, CENTER)
    text('Tap to begin', Game.width / 2, Game.height / 2)
  }

  mouseClicked() {
    // if (millis() - this.start > 1000) {
      sound.loop()
      endScene()
    // }
  }
}
