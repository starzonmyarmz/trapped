class Home {
  constructor() {
    this.reset()
  }

  draw() {
    background(255)

    Game.shapes = this.shapes

    Game.shapes.forEach((shape, i) => {
      shape.update()
      shape.draw()

      if (shape.alpha > 200) {
        Game.hits[i] = collideRectCircle(
          shape.x, shape.y, shape.w, shape.h,
          Game.bug.pos.x, Game.bug.pos.y, Game.bug.radius
        )
      }
    })
  }

  reset() {
    const fadeIn = { delay: 2000, duration: 1000, props: { alpha: 255 }}
    const fadeOut = { delay: 2000, duration: 1000, props: { alpha: 255 }}

    this.shapes = [
      // Screen 1
      new Poly({ x: 25, y: 25, w: 122, h: 122, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 - Game.width }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 173, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 - Game.width }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 247, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 247 - Game.width }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 173, y: 99, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 - Game.width }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 247, y: 99, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 247 - Game.width }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 25, y: 173, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 - Game.width }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 99, y: 173, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 99 - Game.width }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 173, y: 173, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 - Game.width }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 247, y: 173, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 247 - Game.width }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 25, y: 247, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 - Game.width }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width * 2 }}, fadeOut]),
      new Poly({ x: 99, y: 247, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 99 - Game.width }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width * 2 }}, fadeOut]),

      // Screen 2
      new Poly({ x: Game.width + 25, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 99, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 173, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 247, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 25, y: 99, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 99, y: 99, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 173, y: 99, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 247, y: 99, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 25, y: 173, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 99, y: 173, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 173, y: 173, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 247, y: 173, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 25, y: 247, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 99, y: 247, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 173, y: 247, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 247, y: 247, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 25, y: 321, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 99, y: 321, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 173, y: 321, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width }}, fadeOut]),
      new Poly({ x: Game.width + 247, y: 321, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width }}, fadeOut]),

      // Screen 3
      new Poly({ x: Game.width * 2 + 25, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 + Game.width }}, { delay: 2000, duration: 301, props: { x: 25 }}, fadeOut]),
      new Poly({ x: Game.width * 2 + 99, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 99 + Game.width }}, { delay: 2000, duration: 301, props: { x: 99 }}, fadeOut]),
      new Poly({ x: Game.width * 2 + 173, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 + Game.width }}, { delay: 2000, duration: 301, props: { x: 173 }}, fadeOut]),
      new Poly({ x: Game.width * 2 + 247, y: 25, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 247 + Game.width }}, { delay: 2000, duration: 301, props: { x: 247 }}, fadeOut]),
      new Poly({ x: Game.width * 2 + 25, y: 99, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 25 + Game.width }}, { delay: 2000, duration: 301, props: { x: 25 }}, fadeOut]),
      new Poly({ x: Game.width * 2 + 99, y: 99, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 99 + Game.width }}, { delay: 2000, duration: 301, props: { x: 99 }}, fadeOut]),
      new Poly({ x: Game.width * 2 + 173, y: 99, w: 48, h: 48, alpha: 0.01 }, [fadeIn, { delay: 4000, duration: 300, props: { x: 173 + Game.width }}, { delay: 2000, duration: 301, props: { x: 173 }}, fadeOut]),

      new Poly({ x: 0, y: Game.height - 86, w: Game.width, h: 86, alpha: 0.01 }, [fadeIn])
    ]
  }
}
