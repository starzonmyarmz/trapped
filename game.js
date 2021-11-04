let Game = {
  width: 320,
  height: 480,
  scenes: null,
  timestamp: 0,
  hits: []
}

let bug

let reset = () => {
  Game.timestamp = millis()
  Game.scenes.showNextScene()
  Game.hits = []
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

  console.log(Game.timestamp)
}

function doubleClicked() {
  Game.scenes.handleEvent('doubleClicked')
  Game.scenes.showScene(Home)
  bug.reacting = true
  Game.timestamp = millis()
  Game.hits = []
}

// function HomeScene() {
  // home = new Home()
  //   home.shapes.forEach((s, i) => {
  //     Game.hits[i] = collideRectCircle(s.pos.x, s.pos.y, s.w, s.h, bug.pos.x, bug.pos.y, bug.radius)
  //   })
// }
