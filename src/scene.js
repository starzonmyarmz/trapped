class Scene {
  constructor() {
  }

  startBuffer() {
    return { delay: 2000, duration: 0, props: {}}
  }

  endBuffer() {
    return { delay: 4000, duration: 0, props: {}}
  }

  createCollision(shape, index, type = 'rect') {
    switch (type) {
      case 'rect' :
        Game.hits[index] = collideRectCircle(
          shape.x, shape.y, shape.w, shape.h,
          Game.bug.pos.x, Game.bug.pos.y, Game.bug.radius
        )
        break
      case 'circle' :
        Game.hits[index] = collideCircleCircle(
          shape.x + shape.d / 2, shape.y + shape.d / 2, shape.d,
          Game.bug.pos.x, Game.bug.pos.y, Game.bug.radius * 2
        )
        break
    }
  }

  startSong(song) {
    Game.song = song
    Game.song.playMode('restart')

    if (Game.sound) {
      Game.song.loop()
      Game.song.setVolume(1)
    }
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
