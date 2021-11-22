class Intro extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(0)

    fill(255)
    textSize(14)
    textAlign(CENTER, CENTER)
    text('Tap to begin', Game.width / 2, Game.height / 2)

    if (!Game.skip_intro && this.intro_started) {
      image(intro, 0, 0, Game.width, Game.height)

      if (intro.elt.ended) {
        Game.skip_intro = true
        localStorage.setItem('trapped_game_intro', Game.skip_intro)
        this.endScene()
      }
    }
  }

  touchEnded() {
    if (!Game.permission) return
    if (this.intro_started) return

    if (Game.skip_intro) {
      this.endScene()
    } else {
      intro.play()
    }

    this.intro_started = true
  }

  reset() {
    this.intro_started = false
  }
}
