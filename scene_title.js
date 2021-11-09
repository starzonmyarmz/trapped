class Title {
  constructor() {
    this.active = false
  }

  draw() {
    background(0)

    fill(255)
    textSize(32)
    textAlign(CENTER, TOP)
    text('trapped', Game.width / 2, 0)

    fill(128)
    textSize(12)
    textAlign(CENTER, BOTTOM)
    text('Daniel Marino • Game Off 2021', Game.width / 2, Game.height)

    Game.bug.hidden = false
    Game.title_active = true
  }
}
