class Intro extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background('rgba(0, 0, 0, 0)')
    fill(0)
    rect(0, Game.height - 48, Game.width, 48)
    fill(255)
    textSize(14)
    textAlign(CENTER, BOTTOM)
    text('tap to begin', Game.width / 2, Game.height - 24)

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

    // A touch interaction is required
    // to start audio in most browsers.
    Game.song = dummy
    Game.song.play()
    Game.song.setVolume(0)

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
