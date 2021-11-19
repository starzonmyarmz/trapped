class Music extends Scene {
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

    const color = '#ff0000'

    let tags_p = 16

    // Tags
    for (let i = 0; i < 7; i++) {
      let w = random(48, 120)
      let g = 16

      let x = tags_p

      this.shapes.push(
        new Poly({ x: tags_p, y: 32, w: w, h: 16, color: color }, [
          { delay: 21000, duration: 2000, props: { y: 32 - 348 } },
        ])
      )

      tags_p = tags_p + w + g
    }

    // Title
    this.shapes.push(
      new Poly({ x: 16, y: 80, w: random(120, Game.width - 40), h: 32, color: color }, [
        { delay: 21000, duration: 2000, props: { y: 80 - 348 } },
      ])
    )

    // Popular Albums
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < 8; i++) {
        this.shapes.push(
          new Poly({ x: 16 + i * 112, y: 140 + j * 140, w: 96, h: 96, color: color }, [
            { delay: 7000, duration: 200, props: { x: (16 + i * 112) - 112 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 224 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 336 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 448 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 592 } },
            { delay: 4000, duration: 500, props: { x: (16 + i * 112) - 336 } },
            { delay: 2400, duration: 2000, props: { y: 140 + j * 140 - 348 } },
            { delay: 3000, duration: 5000, props: { y: 140 + j * 140 - 348 - 174 } },
          ]),
          new Poly({ x: 16 + i * 112, y: 140 + j * 140 + 104, w: random(48, 96), h: 4, color: color }, [
            { delay: 7000, duration: 200, props: { x: (16 + i * 112) - 112 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 224 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 336 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 448 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 592 } },
            { delay: 4000, duration: 500, props: { x: (16 + i * 112) - 336 } },
            { delay: 2400, duration: 2000, props: { y: 140 + j * 140 + 104 - 348 } },
            { delay: 3000, duration: 5000, props: { y: 140 + j * 140 + 104 - 348 - 174 } },
          ]),
          new Poly({ x: 16 + i * 112, y: 140 + j * 140 + 112, w: random(48, 96), h: 4, color: color }, [
            { delay: 7000, duration: 200, props: { x: (16 + i * 112) - 112 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 224 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 336 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 448 } },
            { delay: 1500, duration: 200, props: { x: (16 + i * 112) - 592 } },
            { delay: 4000, duration: 500, props: { x: (16 + i * 112) - 336 } },
            { delay: 2400, duration: 2000, props: { y: 140 + j * 140 + 112 - 348 } },
            { delay: 3000, duration: 5000, props: { y: 140 + j * 140 + 112 - 348 - 174 } },
          ]),
        )
      }
    }

    // Title
    this.shapes.push(
      new Poly({ x: 16, y: 428, w: random(120, Game.width - 40), h: 32, color: color }, [
        { delay: 21000, duration: 2000, props: { y: 428 - 348 } },
        { delay: 3000, duration: 5000, props: { y: 428 - 348 - 174 } },
      ])
    )

    // Recent Albums
    for (let i = 0; i < 8; i++) {
      this.shapes.push(
        new Poly({ x: 16, y: i * 64 + 488, w: 48, h: 48, color: color }, [
          { delay: 21000, duration: 2000, props: { y: i * 64 + 488 - 348 } },
          { delay: 3000, duration: 5000, props: { y: i * 64 + 488 - 348 - 174 } },
          { delay: 5000, duration: 1000, props: { y: i * 64 + 488 - 348 - 174 - 242 } },
        ]),
        new Poly({ x: 80, y: i * 64 + 488 + 14, w: random(100, Game.width - 100), h: 8, color: color }, [
          { delay: 21000, duration: 2000, props: { y: i * 64 + 488 + 14 - 348 } },
          { delay: 3000, duration: 5000, props: { y: i * 64 + 488 + 14 - 348 - 174 } },
          { delay: 5000, duration: 1000, props: { y: i * 64 + 488 + 14 - 348 - 174 - 242 } },
        ]),
        new Poly({ x: 80, y: i * 64 + 488 + 30, w: random(100, Game.width - 100), h: 4, color: color }, [
          { delay: 21000, duration: 2000, props: { y: i * 64 + 488 + 30 - 348 } },
          { delay: 3000, duration: 5000, props: { y: i * 64 + 488 + 30 - 348 - 174 } },
          { delay: 5000, duration: 1000, props: { y: i * 64 + 488 + 30 - 348 - 174 - 242 } },
        ]),
      )
    }

    // Title
    this.shapes.push(
      new Poly({ x: 16, y: 1016, w: random(120, Game.width - 40), h: 32, color: color }, [
        { delay: 21000, duration: 2000, props: { y: 1016 - 348 } },
        { delay: 3000, duration: 5000, props: { y: 1016 - 348 - 174 } },
        { delay: 5000, duration: 1000, props: { y: 1016 - 348 - 174 - 242 } },
      ])
    )

    // Videos
    for (let i = 0; i < 4; i++) {
      this.shapes.push(
        new Poly({ x: 16 + i * 208, y: 1076, w: 192, h: 128, color: color }, [
          { delay: 21000, duration: 2000, props: { y: 1076 - 348 } },
          { delay: 3000, duration: 5000, props: { y: 1076 - 348 - 174 } },
          { delay: 5000, duration: 1000, props: { y: 1076 - 348 - 174 - 242 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 208 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 416 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 530 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 416 } },
        ]),
        new Poly({ x: 16 + i * 208, y: 1076 + 136, w: random(48, 96), h: 4, color: color }, [
          { delay: 21000, duration: 2000, props: { y: 1076 + 136 - 348 } },
          { delay: 3000, duration: 5000, props: { y: 1076 + 136 - 348 - 174 } },
          { delay: 5000, duration: 1000, props: { y: 1076 + 136 - 348 - 174 - 242 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 208 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 416 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 530 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 416 } },
        ]),
        new Poly({ x: 16 + i * 208, y: 1076 + 144, w: random(48, 96), h: 4, color: color }, [
          { delay: 21000, duration: 2000, props: { y: 1076 + 144 - 348 } },
          { delay: 3000, duration: 5000, props: { y: 1076 + 144 - 348 - 174 } },
          { delay: 5000, duration: 1000, props: { y: 1076 + 144 - 348 - 174 - 242 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 208 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 416 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 530 } },
          { delay: 2000, duration: 500, props: { x: 16 + i * 208 - 416 } },
        ]),
      )
    }

    this.transition = new Poly(
      { x: 0, y: 0, w: Game.width, h: Game.height, color: 255 },
      [
        this.startBuffer(),
        { delay: 0, duration: 2000, props: { alpha: 0 }},
        { delay: 50000, duration: 2000, props: { alpha: 255 }},
        this.endBuffer()
      ]
    )
  }
}
