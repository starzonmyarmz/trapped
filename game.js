let WIDTH = 320
let HEIGHT = 480

let scenes
let timestamp
let bug
let title, home, twitter
let hits = []

function preload() {

}

function setup() {
  createCanvas(WIDTH, HEIGHT)

  scenes = new SceneManager()

  scenes.addScene(Title)
  scenes.addScene(Home)
  scenes.addScene(Twitter)

  bug = new Bug(WIDTH / 2, HEIGHT / 2)

  scenes.showScene(Title)
}

function draw() {
  background(0)
  scenes.draw()

  bug.draw()
  bug.update(mouseX, mouseY)

  hits.forEach((h) => {
    if (h) console.log(h)
  })

  console.log(timestamp)
}

function doubleClicked() {
  scenes.handleEvent('doubleClicked')
  scenes.showScene(Home)
  bug.reacting = true
  timestamp = millis()
  hits = []
}

// function HomeScene() {
  // home = new Home()
  //   hits = []
  //   home.setTimeStart(millis())
  //   home.draw()
  //   home.update(millis())
  //
  //   home.shapes.forEach((s, i) => {
  //     hits[i] = collideRectCircle(s.pos.x, s.pos.y, s.w, s.h, bug.pos.x, bug.pos.y, bug.radius)
  //   })
// }
