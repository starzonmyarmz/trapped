class Intro extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(0)

    if (!this.song_started) {
      this.startSong(theme)
      this.song_started = true
    }

    fill(255)
    textSize(14)
    textAlign(CENTER, CENTER)
    text('Tap to begin', Game.width / 2, Game.height / 2)

    if (!Game.skip_intro && this.intro_started) {
      image(intro_vid, -1, -1, Game.width + 3, Game.height + 3)

      if (intro_vid.elt.ended) {
        this.endScene()
        Game.skip_intro = true
        localStorage.setItem('trapped_game_intro', Game.skip_intro)
      }
    }
  }

  mouseClicked() {
    if (!Game.permission) return
    if (this.intro_started) return

    if (Game.skip_intro) {
      this.endScene()
    } else {
      intro_vid.play()

      if (Game.sound) {
        Game.song = theme
        Game.song.setVolume(1)
        Game.song.play()

        this.song_started = true
      }
    }

    this.intro_started = true
  }

  reset() {
    this.intro_started = false
    this.song_started = false
    this.song_stopped = false
  }
}
