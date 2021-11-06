class Intro {
  draw() {
    const iWidth = img.width / 16
    const iHeight = img.height / 16

    image(img, Game.width / 2 - (iWidth / 2), Game.height / 2 - (iHeight / 2), iWidth, iHeight)

    if (ellapsed(2000, 4000)) {
      endScene()
    }
  }
}
