class Twitter extends Scene {
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

      if (this.transition.alpha < 5) {
        this.createCollision(shape, i)
      }
    })

    this.transition.update()
    this.transition.draw()

    if (!this.transition.q.length && !this.song_stopped) {
      this.endSong()
      this.song_stopped = true
    }

    if (this.transition.current == null && !this.transition.q.length) {
      this.endScene()
    }
  }

  reset() {
    this.song_started = false
    this.song_stopped = false
    this.shapes = []

    const color = '#1d9bf0'

    let next_y = 16
    let dur = 60000
    let dist = 4000

    // Tweet
    let createTweet = (y) => {
      this.shapes.push(
        new Poly({ x: 16, y: y - dist, w: 48, h: 48, shape: 'ellipse', color: color }, [
          { delay: 0, duration: dur, props: { y: y } }
        ]),
        new Poly({ x: 78, y: y + 12 - dist, w: random(48, 144), h: 8, color: color }, [
          { delay: 0, duration: dur, props: { y: y + 12 } }
        ]),
        new Poly({ x: 78, y: y + 28 - dist, w: random(48, 144), h: 8, color: color }, [
          { delay: 0, duration: dur, props: { y: y + 28 } }
        ]),
        new Poly({ x: 296, y: y + 14 - dist, w: 16, h: 4, color: color }, [
          { delay: 0, duration: dur, props: { y: y + 14 } }
        ])
      )

      let l = round(random(1, 5))

      for (let i = 0; i <= l; i++) {
        this.shapes.push(
          new Poly({ x: 16, y: y + 60 + 12 * i - dist, w: (i === l ? random(48, 176) : random(248, 288)), h: 4, color: color }, [
            { delay: 0, duration: dur, props: { y: y + 60 + 12 * i} }
          ])
        )
      }

      next_y = next_y + 88 + (l * 12)

      let p = random() > 0.5

      if (p) {
        let h = random(125, 250)

        this.shapes.push(
          new Poly({ x: 16, y: next_y - dist, w: 288, h: h, color: color }, [
            { delay: 0, duration: dur, props: { y: next_y } }
          ])
        )

        next_y = next_y + h + 24
      }
    }

    for (let i = 0; i < 20; i++) {
      createTweet(next_y)
    }

    // New Tweet
    this.shapes.push(
      new Poly({ x: Game.width - 56, y: Game.height - 56, w: 48, h: 48, shape: 'ellipse', color: color }, [
        { delay: 0, duration: 0, props: { } }
      ])
    )

    this.transition = new Poly(
      { x: 0, y: 0, w: Game.width, h: Game.height, color: 255 },
      [
        this.startBuffer(),
        { delay: 0, duration: 2000, props: { alpha: 0 }},
        { delay: dur, duration: 2000, props: { alpha: 255 }},
        this.endBuffer()
      ]
    )
  }
}
