class Messages extends Scene {
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

    const color = '#1a73e8'
    const gap = 16

    let prevy = 0

    for (let i = 0; i < 30; i++) {
      let prob = random() >=  0.5
      let textw = random(40, 200)
      let texth = textw < 150 ? 32 : 32 * floor(random(1, 5))
      let textx = prob ? 16 : Game.width - 16 - textw
      let texty = prevy
      let trix = prob ? 8 : Game.width - 16
      let triy = prevy + texth - 8
      let tang = prob ? 'triangle_right' : 'triangle_left'

      prevy = texty + texth + gap

      this.shapes.push(
        new Poly(
          { x: textx, y: texty, w: textw, h: texth, color: color },
          [
            { delay: 6000, duration: 30000, props: { y: texty - 1500 }}
          ]
        ),
        new Poly(
          { x: trix, y: triy, w: 8, h: 8, color: color, shape: tang },
          [
            { delay: 6000, duration: 30000, props: { y: triy - 1500 }}
          ]
        ),
      )
    }

    this.transition = new Poly(
      { x: 0, y: 0, w: Game.width, h: Game.height, color: 255 },
      [
        this.startBuffer(),
        { delay: 0, duration: 2000, props: { alpha: 0 }},
        { delay: 30000, duration: 2000, props: { alpha: 255 }},
        this.endBuffer()
      ]
    )
  }
}
