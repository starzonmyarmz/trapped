class Home {
  constructor() {
    this.shapes = [
      // Screen 1
      new Poly({ x: 25, y: 25, w: 122, h: 122 }, [{ delay: 4000, duration: 300, props: { x: 25 - Game.width }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width * 2 } }]),
      new Poly({ x: 173, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 - Game.width }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width * 2 } }]),
      new Poly({ x: 247, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 247 - Game.width }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width * 2 } }]),
      new Poly({ x: 173, y: 99, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 - Game.width }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width * 2 } }]),
      new Poly({ x: 247, y: 99, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 247 - Game.width }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width * 2 } }]),
      new Poly({ x: 25, y: 173, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 25 - Game.width }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width * 2 } }]),
      new Poly({ x: 99, y: 173, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 99 - Game.width }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width * 2 } }]),
      new Poly({ x: 173, y: 173, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 - Game.width }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width * 2 } }]),
      new Poly({ x: 247, y: 173, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 247 - Game.width }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width * 2 } }]),
      new Poly({ x: 25, y: 247, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 25 - Game.width }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width * 2 } }]),
      new Poly({ x: 99, y: 247, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 99 - Game.width }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width * 2 } }]),

      // Screen 2
      new Poly({ x: Game.width + 25, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width } }]),
      new Poly({ x: Game.width + 99, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width } }]),
      new Poly({ x: Game.width + 173, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width } }]),
      new Poly({ x: Game.width + 247, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width } }]),
      new Poly({ x: Game.width + 25, y: 99, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width } }]),
      new Poly({ x: Game.width + 99, y: 99, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width } }]),
      new Poly({ x: Game.width + 173, y: 99, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width } }]),
      new Poly({ x: Game.width + 247, y: 99, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width } }]),
      new Poly({ x: Game.width + 25, y: 173, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width } }]),
      new Poly({ x: Game.width + 99, y: 173, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width } }]),
      new Poly({ x: Game.width + 173, y: 173, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width } }]),
      new Poly({ x: Game.width + 247, y: 173, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width } }]),
      new Poly({ x: Game.width + 25, y: 247, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width } }]),
      new Poly({ x: Game.width + 99, y: 247, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width } }]),
      new Poly({ x: Game.width + 173, y: 247, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width } }]),
      new Poly({ x: Game.width + 247, y: 247, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width } }]),
      new Poly({ x: Game.width + 25, y: 321, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 25 }}, { delay: 2000, duration: 301, props: { x: 25 - Game.width } }]),
      new Poly({ x: Game.width + 99, y: 321, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 99 }}, { delay: 2000, duration: 301, props: { x: 99 - Game.width } }]),
      new Poly({ x: Game.width + 173, y: 321, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 }}, { delay: 2000, duration: 301, props: { x: 173 - Game.width } }]),
      new Poly({ x: Game.width + 247, y: 321, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 247 }}, { delay: 2000, duration: 301, props: { x: 247 - Game.width } }]),

      // Screen 3
      new Poly({ x: Game.width * 2 + 25, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 25 + Game.width }}, { delay: 2000, duration: 301, props: { x: 25 } }]),
      new Poly({ x: Game.width * 2 + 99, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 99 + Game.width }}, { delay: 2000, duration: 301, props: { x: 99 } }]),
      new Poly({ x: Game.width * 2 + 173, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 + Game.width }}, { delay: 2000, duration: 301, props: { x: 173 } }]),
      new Poly({ x: Game.width * 2 + 247, y: 25, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 247 + Game.width }}, { delay: 2000, duration: 301, props: { x: 247 } }]),
      new Poly({ x: Game.width * 2 + 25, y: 99, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 25 + Game.width }}, { delay: 2000, duration: 301, props: { x: 25 } }]),
      new Poly({ x: Game.width * 2 + 99, y: 99, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 99 + Game.width }}, { delay: 2000, duration: 301, props: { x: 99 } }]),
      new Poly({ x: Game.width * 2 + 173, y: 99, w: 48, h: 48 }, [{ delay: 4000, duration: 300, props: { x: 173 + Game.width }}, { delay: 2000, duration: 301, props: { x: 173 } }]),

      new Poly({ x: 0, y: Game.height - 86, w: Game.width, h: 86 }, [])
    ]
  }

  draw() {
    Game.shapes = this.shapes

    Game.shapes.forEach((shape) => {
      shape.update()
      shape.draw()

      // if (s[0].alpha > 0.75) {
      //   Game.hits[i] = collideRectCircle(
      //     s[0].pos.x, s[0].pos.y, s[0].w, s[0].h,
      //     Game.bug.pos.x, Game.bug.pos.y, Game.bug.radius
      //   )
      // }
    })
  }
}
