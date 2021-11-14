class Scene {
  constructor() {

  }

  createCollision(shape, index) {
    Game.hits[index] = collideRectCircle(
      shape.x, shape.y, shape.w, shape.h,
      Game.bug.pos.x, Game.bug.pos.y, Game.bug.radius
    )
  }

  endScene() {
    Game.hits = []
    Game.shapes = []
    Game.timestamp = millis()
    Game.scenes.scene.oScene.reset()
    Game.scenes.showNextScene()
  }
}
