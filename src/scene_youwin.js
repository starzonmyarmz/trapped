class YouWin extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(255)
    text('you win placeholder lol', 0, 0)

    // if (!this.song_started) {
    //   this.startSong(home)
    //   this.song_started = true
    // }
    //
    // Game.shapes = this.shapes
    // Game.shapes.forEach((shape, i) => {
    //   shape.update()
    //   shape.draw()
    // })
    //
    // this.transition.update()
    // this.transition.draw()
    //
    // if (!this.transition.q.length && !this.song_stopped) {
    //   this.endSong()
    //   this.song_stopped = true
    // }
    //
    // if (this.transition.current == null && !this.transition.q.length) {
    //   this.saveProgress('Twitter')
    //   this.endScene()
    // }
  }

  reset() {
    this.song_started = false
    this.song_stopped = false
    this.shapes = []
  }
}
