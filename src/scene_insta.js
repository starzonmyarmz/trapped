class Insta extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(255)

    Game.shapes = this.shapes
    Game.shapes.forEach((shape, i) => {
      shape.update()
      shape.draw()

      // if (this.transition.alpha < 100) {
          // this.createCollision(shape, i)
      // }
    })

    this.transition.update()
    this.transition.draw()

    // if (this.transition.current == null && !this.transition.q.length) {
    //   this.endScene()
    // }
  }

  reset() {
    this.shapes = []

    const color = '#d3307f'
    const gap = 16

    let postprevy = 88

    // Posts
    for (let i = 0; i < 10; i++) {
      let posty = postprevy

      postprevy = posty + Game.width + 4

      this.shapes.push(
        new Poly(
          { x: 0, y: posty, w: Game.width, h: Game.width, color: color },
          [
            { delay: 8000, duration: 10000, props: { y: posty - 1500 }},
            { delay: 2000, duration: 2000, props: { alpha: 0.01 }}
          ]
        )
      )
    }

    this.shapes.push(
      new Poly({ x: 0, y: 0, w: Game.width, h: 88, color: '255' }, [])
    )

    // Stories
    for (let i = 0; i < 10; i++) {
      let storyx = 18 + (66 * i)

      this.shapes.push(
        new Poly(
          { x: storyx, y: 18, w: 48, h: 48, color: color, shape: 'ellipse' },
          [
            { delay: 4000, duration: 2000, props: { x: -660 + Game.width + i * 66 }},
            { delay: 14000, duration: 2000, props: { alpha: 0.01 }}
          ]
        )
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
