class Intro {
  constructor() {
    this.start = millis()
  }

  draw() {
    background(0)
    
    if (millis() - this.start > 1000) {
      endScene()
    }
  }
}
