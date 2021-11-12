class Intro {
  constructor() {
    this.reset()
  }

  draw() {
    background(0)

    if (Game.skip_intro) {
      fill(255)
      textSize(14)
      textAlign(CENTER, CENTER)
      text('Tap to begin', Game.width / 2, Game.height / 2)
    } else {
      if (this.started) {
        image(intro_vid, -1, -1, Game.width + 3, Game.height + 3)

        if (millis() - Game.timestamp > 16000) {
          endScene()
          Game.skip_intro = true
          localStorage.setItem('trapped_game_intro', Game.skip_intro)
        }
      } else {
        fill(255)
        textSize(14)
        textAlign(CENTER, CENTER)
        text('Tap to begin', Game.width / 2, Game.height / 2)
      }
    }
  }

  mouseClicked() {
    if (!Game.permission) return
    if (this.started) return

    sound.loop()

    this.started = true
    Game.timestamp = millis()

    if (Game.skip_intro) {
      endScene()
    }
  }

  reset() {
    this.started = false
  }
}
