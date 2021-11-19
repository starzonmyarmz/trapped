class Intro extends Scene {
  constructor() {
    super()
    this.reset()
  }

  draw() {
    background(this.bg)

    fill(255)
    textSize(14)
    textAlign(CENTER, CENTER)
    text('Tap to begin', Game.width / 2, Game.height / 2)

    if (!Game.skip_intro && this.intro_started) {
      background(this.bg)

      if (millis() - this.timestamp < 4000) {
        if (this.fly_a) {
          this.fly_vx = 0
          this.fly_vy = 0
          this.rotate = 27.5
          this.fly_a = false
        }

        this.fly_vx += 1
        this.fly_vy += -2
        this.fly_x = -48 + this.fly_vx
        this.fly_y = Game.height / 3 + this.fly_vy
      } else if (millis() - this.timestamp < 9000) {
        if (this.fly_b) {
          this.fly_vx = 0
          this.fly_vy = 0
          this.rotate = -110
          this.fly_b = false
        }

        this.fly_vx += -2
        this.fly_vy += 1
        this.fly_x = Game.width + 48 + this.fly_vx
        this.fly_y = Game.height / 3 + this.fly_vy
      } else if (millis() - this.timestamp < 12000) {
        if (this.fly_c) {
          this.fly_vx = 0
          this.fly_vy = 0
          this.rotate = 160
          this.fly_c = false
        }

        this.fly_vx += 2
        this.fly_vy += 4
        this.fly_x = Game.width / 3 + this.fly_vx
        this.fly_y = -48 + this.fly_vy
      } else if (millis() - this.timestamp < 16000) {
        if (this.fly_d) {
          this.fly_ay = 0
          this.fly_vy = 0
          this.rotate = 0
          this.fly_d = false
        }

        this.fly_ay -= 0.082
        this.fly_vy -= 7 + this.fly_ay
        this.fly_x = Game.width / 2 - 12

        if (this.fly_y > Game.height / 2) {
          this.fly_y = Game.height + 48 + this.fly_vy
        }
      } else if (millis() - this.timestamp < 17000) {
        fly.pause()
      } else if (millis() - this.timestamp < 21000) {
        this.bg = 255
        tint(0, 255)
      } else if (millis() - this.timestamp < 22000) {
        this.scale -= 0.009
      } else {
        Game.skip_intro = true
        localStorage.setItem('trapped_game_intro', Game.skip_intro)
        this.endScene()
      }

      push()
      imageMode(CENTER)
      translate(this.fly_x + 12, this.fly_y + 12)
      rotate(this.rotate)
      scale(this.scale)
      image(fly, 0, 0, 24, 24)
      pop()
    }
  }

  touchEnded() {
    if (!Game.permission) return
    if (this.intro_started) return

    this.timestamp = millis()

    if (Game.skip_intro) {
      this.endScene()
    } else {
      fly.play()

      if (Game.sound) {
        Game.song = intro
        Game.song.setVolume(1)
        Game.song.play()
        Game.song.playMode('restart')
        this.song_started = true
      }
    }

    this.intro_started = true
  }

  reset() {
    this.intro_started = false
    this.song_started = false
    this.song_stopped = false
    this.timestamp = millis()
    this.fly_a = true
    this.fly_b = true
    this.fly_c = true
    this.fly_d = true
    this.scale = 1
    this.bg = 0
  }
}
