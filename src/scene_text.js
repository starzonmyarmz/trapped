class Text {
  constructor() {
    this.reset()
  }

  draw() {
    background(255)

    Game.shapes = this.shapes
    Game.shapes.forEach((shape, i) => {
      shape.update()
      shape.draw()

      if (this.transition.alpha < 100) {
        Game.hits[i] = collideRectCircle(
          shape.x, shape.y, shape.w, shape.h,
          Game.bug.pos.x, Game.bug.pos.y, Game.bug.radius
        )
      }
    })

    this.transition.update()
    this.transition.draw()

    if (this.transition.current == null && !this.transition.q.length) {
      endScene()
    }
  }

  reset() {
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
        { delay: 2000, duration: 2000, props: { alpha: 0 }},
        { delay: 30000, duration: 2000, props: { alpha: 255 }}
      ]
    )
  }
}
