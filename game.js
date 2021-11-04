let Game = {
  width: 320,
  height: 480,
  scenes: null,
  timestamp: 0,
  hits: []
}

let bug

let reset = () => {
  Game.hits = []
  Game.timestamp = millis()
  Game.scenes.showNextScene()
}

function preload() {

}

function setup() {
  createCanvas(Game.width, Game.height)

  Game.scenes = new SceneManager()

  Game.scenes.addScene(Title)
  Game.scenes.addScene(Home)
  Game.scenes.addScene(Twitter)

  bug = new Bug(Game.width / 2, Game.height / 2)

  Game.scenes.showScene(Title)
}

function draw() {
  background(0)
  Game.scenes.draw()

  bug.draw()
  bug.update(mouseX, mouseY)

  Game.hits.forEach((h) => {
    if (h) console.log(h)
  })
}

function doubleClicked() {
  Game.scenes.handleEvent('doubleClicked')
  bug.reacting = true
  reset()
}

// function HomeScene() {
  // home = new Home()
  //   home.shapes.forEach((s, i) => {
  //     Game.hits[i] = collideRectCircle(s.pos.x, s.pos.y, s.w, s.h, bug.pos.x, bug.pos.y, bug.radius)
  //   })
// }
