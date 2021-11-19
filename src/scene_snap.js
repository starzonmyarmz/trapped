class Snap extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(255)

    if (!this.song_started) {
      this.startSong(messages)
      this.song_started = true
    }

    Game.shapes = this.shapes
    Game.shapes.forEach((shape, i) => {
      shape.update()
      shape.draw()

      // if (this.transition.alpha <= 5) { }
    })

    this.safe_shapes.forEach((safe) => {
      safe.update()
      safe.draw()
    })




    this.transition.update()
    this.transition.draw()

    // if (!this.transition.q.length && !this.song_stopped) {
    //   this.endSong()
    //   this.song_stopped = true
    // }
    //
    // if (this.transition.current == null && !this.transition.q.length) {
    //   this.endScene()
    // }
  }

  reset() {
    this.song_started = false
    this.song_stopped = false
    this.shapes = []
    this.safe_shapes = []

    const color = '#fffc00'

    const w = Game.width / 16
    const h = Game.height / 16

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        this.shapes.push(
          new Poly(
            { x: j * w, y: i * h, w: w, h: h, color: color }, [
              { delay: 0, duration: 0, props: {} }
            ])
        )
      }
    }

    this.safe_shapes.push(
      new Poly(
        { x: random(0, Game.width - 144), y: random(0, Game.height - 48), w: 144, h: 48, color: 255, alpha: 0.01 }, [
          { delay: 0, duration: 0, props: { alpha: 255 }},
          { delay: 11000, duration: 0, props: { alpha: 0 }},
        ])
    )

    this.safe_shapes.push(
      new Poly(
        { x: random(0, Game.width - 56), y: random(0, Game.height - 56), w: 56, h: 56, shape: 'ellipse', color: 255, alpha: 0.01 }, [
          { delay: 11000, duration: 0, props: { alpha: 255 }},
          { delay: 11000, duration: 0, props: { alpha: 0 }},
        ])
    )

    this.safe_shapes.push(
      new Poly(
        { x: random(0, Game.width - 32), y: random(0, Game.height - 32), w: 32, h: 32, color: 255, alpha: 0.01 }, [
          { delay: 22000, duration: 0, props: { alpha: 255 }},
          { delay: 11000, duration: 0, props: { alpha: 0 }},
        ])
    )

    this.safe_shapes.push(
      new Poly(
        { x: random(0, Game.width - 72), y: random(0, Game.height - 72), w: 72, h: 72, shape: 'triangle', color: 255, alpha: 0.01 }, [
          { delay: 33000, duration: 0, props: { alpha: 255 }},
          { delay: 11000, duration: 0, props: { alpha: 0 }}
        ])
    )

    this.safe_shapes.push(
      new Poly(
        { x: random(0, Game.width - 16), y: random(0, Game.height - 256), w: 16, h: 256, color: 255, alpha: 0.01 }, [
          { delay: 44000, duration: 0, props: { alpha: 255 }},
          { delay: 11000, duration: 0, props: { alpha: 0 }}
        ])
    )

    this.transition = new Poly(
      { x: 0, y: 0, w: Game.width, h: Game.height, color: 255 },
      [
        this.startBuffer(),
        { delay: 0, duration: 2000, props: { alpha: 0 }},
        { delay: 5000, duration: 2000, props: { alpha: 255 }},
        { delay: 2000, duration: 2000, props: { alpha: 0 }},
        { delay: 5000, duration: 2000, props: { alpha: 255 }},
        { delay: 2000, duration: 2000, props: { alpha: 0 }},
        { delay: 5000, duration: 2000, props: { alpha: 255 }},
        { delay: 2000, duration: 2000, props: { alpha: 0 }},
        { delay: 5000, duration: 2000, props: { alpha: 255 }},
        { delay: 2000, duration: 2000, props: { alpha: 0 }},
        { delay: 5000, duration: 2000, props: { alpha: 255 }},
        this.endBuffer()
      ]
    )
  }
}
