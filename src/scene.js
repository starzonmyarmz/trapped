class Scene {
  constructor() {
  }

  startBuffer() {
    return { delay: 2000, duration: 0, props: {}}
  }

  endBuffer() {
    return { delay: 4000, duration: 0, props: {}}
  }

  createCollision(shape, index) {
    Game.hits[index] = collideRectCircle(
      shape.x, shape.y, shape.w, shape.h,
      Game.bug.pos.x, Game.bug.pos.y, Game.bug.radius
    )
  }

  startSong(song) {
    Game.song = song
    Game.song.playMode('restart')

    if (!Game.sound) return
    Game.song.loop()
    Game.song.setVolume(1)
  }

  endSong() {
    if (!Game.sound) return
    Game.song.setVolume(0, 3)
  }

  endScene(scene) {
    Game.hits = []
    Game.shapes = []
    Game.timestamp = millis()
    Game.scenes.scene.oScene.reset()

    if (scene) {
      Game.scenes.showScene(levels[scene])
    } else {
      Game.scenes.showNextScene()
    }
  }

  saveProgress(scene) {
    localStorage.setItem('trapped_game_progress', scene)
  }
}
