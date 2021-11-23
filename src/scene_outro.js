class Outro extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(255)

    fill(0)
    textSize(14)
    textAlign(CENTER, CENTER)
    text('tap to continue', Game.width / 2, Game.height / 2)

    Game.bug.hidden = true

    if (this.outro_started) {
      image(outro, 0, 0, Game.width, Game.height)

      if (outro.elt.ended) {
        Game.song.setVolume(0, 3)
      }

      if (Game.song.getVolume() <= .01) {
        this.saveProgress('HomeMessages')
        this.endScene('Title')
      }
    }
  }

  touchEnded() {
    if (!Game.permission) return
    if (this.outro_started) return

    Game.song = finale
    Game.song.play()
    Game.song.setVolume(1)
    outro.play()
    this.outro_started = true
  }

  reset() {
    this.outro_started = false
  }
}
