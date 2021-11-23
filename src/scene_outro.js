class Outro extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(255)

    Game.bug.hidden = true

    if (!this.outro_started) {
      outro.play()
      this.outro_started = true
    }

    image(outro, 0, 0, Game.width, Game.height)

    if (outro.elt.ended) {
      this.saveProgress('HomeMessages')
      this.endScene('Title')
    }
  }

  reset() {
    this.outro_started = false
  }
}