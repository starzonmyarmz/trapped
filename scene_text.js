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

      if (this.transition.alpha > 200) {
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
    const color = '#1a73e8'

    this.shapes = [
      new Poly({ x: 0, y: 0, w: Game.width, h: 80, color: color }, []),

      new Poly({ x: 16, y: 104, w: 150, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 150 - 1500 }}]),
      new Poly({ x: Game.width - (103 + 16), y: 162, w: 103, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 162 - 1500 }}]),
      new Poly({ x: 16, y: 218, w: 132, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 218 - 1500 }}]),
      new Poly({ x: Game.width - (180 + 16), y: 274, w: 180, h: 64, color: color }, [{ delay: 6000, duration: 30000, props: { y: 274 - 1500 }}]),
      new Poly({ x: Game.width - (199 + 16), y: 346, w: 199, h: 64, color: color }, [{ delay: 6000, duration: 30000, props: { y: 346 - 1500 }}]),
      new Poly({ x: 16, y: 434, w: 87, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 434 - 1500 }}]),
      new Poly({ x: 16, y: 474, w: 132, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 474 - 1500 }}]),
      new Poly({ x: Game.width - (220 + 16), y: 530, w: 220, h: 64, color: color }, [{ delay: 6000, duration: 30000, props: { y: 530 - 1500 }}]),
      new Poly({ x: Game.width - (113 + 16), y: 602, w: 113, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 602 - 1500 }}]),
      new Poly({ x: 16, y: 658, w: 45, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 658 - 1500 }}]),
      new Poly({ x: Game.width - (172 + 16), y: 714, w: 172, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 714 - 1500 }}]),
      new Poly({ x: 16, y: 770, w: 201, h: 64, color: color }, [{ delay: 6000, duration: 30000, props: { y: 770 - 1500 }}]),
      new Poly({ x: 16, y: 842, w: 191, h: 64, color: color }, [{ delay: 6000, duration: 30000, props: { y: 842 - 1500 }}]),
      new Poly({ x: Game.width - (79 + 16), y: 930, w: 79, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 930 - 1500 }}]),
      new Poly({ x: Game.width - (197 + 16), y: 970, w: 197, h: 64, color: color }, [{ delay: 6000, duration: 30000, props: { y: 970 - 1500 }}]),
      new Poly({ x: 16, y: 1058, w: 191, h: 64, color: color }, [{ delay: 6000, duration: 30000, props: { y: 1058 - 1500 }}]),
      new Poly({ x: Game.width - (197 + 16), y: 1146, w: 197, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 1146 - 1500 }}]),
      new Poly({ x: Game.width - (131 + 16), y: 1186, w: 131, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 1186 - 1500 }}]),
      new Poly({ x: 16, y: 1242, w: 191, h: 64, color: color }, [{ delay: 6000, duration: 30000, props: { y: 1242 - 1500 }}]),
      new Poly({ x: 16, y: 1314, w: 105, h: 32, color: color }, [{ delay: 6000, duration: 30000, props: { y: 1314 - 1500 }}]),

      new Poly({ x: 0, y: Game.height - 64, w: Game.width, h: 64, color: color }, []),
    ]

    this.transition = new Poly(
      { x: 0, y: 0, w: Game.width, h: Game.height, color: 255 },
      [
        { delay: 2000, duration: 2000, props: { alpha: 0 }},
        { delay: 30000, duration: 2000, props: { alpha: 255 }}
      ]
    )
  }
}
