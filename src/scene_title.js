class Title {
  constructor() {
    this.reset()
  }

  draw() {
    background(255)

    fill(this.color)
    textSize(48)
    textAlign(CENTER, TOP)
    textFont(r_black)
    text('Trapped', Game.width / 2, Game.height / 4 - 16)

    textSize(12)
    textAlign(LEFT, TOP)
    textFont(r_regular)
    text('Settings', 12, 12)

    textAlign(CENTER, BOTTOM)
    text('Swipe to play', Game.width / 2, Game.height - 16)

    rectMode(CENTER)
    rect(Game.width / 2, Game.height - 64, 200, 48)

    fill(255)
    rect(this.current_x, Game.height - 64, 36, 36)

    if (this.rewind) {
      this.current_x -= 4
      if (this.current_x <= this.start_x) {
        this.current_x = this.start_x
        this.rewind = false
      }
    }

    if (this.fadeOut) {
      this.color += 2
      if (this.color >= 255) {
        endScene()
      }
    }

    Game.bug.hidden = false

    this.transition.update()
    this.transition.draw()
  }

  touchStarted() {
    if (mouseX < 134 && mouseY < 72) {
      document.getElementById('settings').hidden = false
    }

    if (mouseY > Game.height - 84) {
      this.touching = true
    }
  }

  touchMoved() {
    if (this.fadeOut) return
    if (!this.touching) return
    this.current_x = constrain(mouseX, this.start_x, this.start_x + 152)
    if (this.current_x >= this.start_x + 152) {
      this.fadeOut = true
    }
  }

  touchEnded() {
    this.touching = false
    if (this.current_x < this.start_x + 152) {
      this.rewind = true
    }
  }

  reset() {
    this.start_x = Game.width / 2 - 76
    this.current_x = Game.width / 2 - 76
    this.rewind = false
    this.fadeOut = false
    this.touching = false
    this.color = 0

    this.transition = new Poly(
      { x: 0, y: 0, w: Game.width, h: Game.height, color: 255 },
      [
        { delay: 2000, duration: 2000, props: { alpha: 0 }}
      ]
    )
  }
}
