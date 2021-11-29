class HomeMessages extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(255)

    if (!this.song_started) {
      this.startSong(home_messages)
      this.song_started = true
    }

    if (!this.tutorial_finished) {
      Game.shapes = this.tutorial_square
      Game.shapes.forEach((shape, i) => {
        shape.update()
        shape.draw()
        if (this.transition_tutorial_in.alpha < 5) {
          this.createCollision(shape, i)
        }
      })

      fill(0)
      textSize(12)
      textAlign(LEFT, TOP)
      textFont(text_regular)
      text("tilt your device\nto avoid colliding\nwith shapes", 172, 324)
      textSize(10)
      text("tap to continue", 172, 380)
    }

    this.transition_tutorial_in.update()
    this.transition_tutorial_in.draw()

    if (this.tutorial_finished) {
      Game.shapes = this.shapes
      Game.shapes.forEach((shape, i) => {
        shape.update()
        shape.draw()
        if (this.transition_tutorial_out[0].alpha < 5) {
          this.createCollision(shape, i)
        }
      })

      this.transition_out.update()
      this.transition_out.draw()

      this.transition_shapes.update()
      this.transition_shapes.draw()

      this.transition_tutorial_out.forEach((shape) => {
        shape.update()
        shape.draw()
      })
    }

    if (!this.transition_shapes.q.length && !this.song_stopped) {
      this.endSong()
      this.song_stopped = true
    }

    if (this.transition_shapes.current == null && !this.transition_shapes.q.length) {
      this.saveProgress('Messages')
      this.endScene()
    }
  }


  touchEnded() {
    this.tutorial_finished = true
  }

  reset() {
    this.tutorial_finished = false
    this.song_started = false
    this.song_stopped = false
    this.shapes = []

    const w = (Game.width - 32) / 4
    const h = (Game.height - 32) / 6

    for (let s = 0; s < layout.length; s++) {
      for (let r = 0; r < layout[s].length; r++) {
        for (let c = 0; c < layout[s][r].length; c++) {
          if (layout[s][r][c] !== 0) {
            this.shapes.push(new Poly(
              { x: (Game.width * s + 28) + (w * c), y: h * r + 28, w: 48, h: 48, color: getHomeColor(layout[s][r][c]) },
              [
                { delay: 6000, duration: 250, props: { x: 28 + (w * c) + (Game.width * (s - 1)) }},
                { delay: 4000, duration: 250, props: { x: 28 + (w * c) + (Game.width * (s - 2)) }},
                { delay: 4000, duration: 500, props: { x: 28 + (w * c) + (Game.width * s) }}
              ]
            ))
          }
        }
      }
    }

    this.transition_shapes = new Poly(
      { x: 0, y: 0, w: Game.width, h: Game.height, color: 255 },
      [
        { delay: 0, duration: 0, props: { alpha: 0 }},
        { delay: 16000, duration: 2000, props: { alpha: 255 }},
        this.endBuffer()
      ]
    )

    this.tutorial_square = [new Poly(
      { x: 172, y: 252, w: 48, h: 48, color: '#1a73e8' }, [])]

    this.transition_tutorial_in = new Poly(
        { x: 172, y: 252, w: 148, h: 180, color: 255, alpha: 255 },
        [this.startBuffer(), { delay: 0, duration: 2000, props: { alpha: 0 } }]
      )

    this.transition_tutorial_out = [
      new Poly(
        { x: 0, y: 0, w: 172, h: Game.height, color: 255, alpha: 255 },
        [{ delay: 0, duration: 2000, props: { alpha: 0 } }]
      ),
      new Poly(
        { x: 220, y: 0, w: 100, h: 300, color: 255, alpha: 255 },
        [{ delay: 0, duration: 2000, props: { alpha: 0 } }]
      ),
      new Poly(
        { x: 172, y: 0, w: 48, h: 252, color: 255, alpha: 255 },
        [{ delay: 0, duration: 2000, props: { alpha: 0 } }]
      )
    ]

    this.transition_out = new Poly(
      { x: 0, y: 0, w: 0, h: 0, color: '#1a73e8' },
      [
        this.startBuffer(),
        { delay: 14000, duration: 0, props: { x: 172, y: 252, w: 48, h: 48 }},
        { delay: 0, duration: 250, props: { x: 0, y: 0, w: Game.width, h: Game.height }},
        this.endBuffer()
      ]
    )
  }
}
