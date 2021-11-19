const layout = [[
  [1, 1, 1, 1,],
  [1, 5, 1, 1,],
  [1, 1, 1, 1,],
  [1, 1, 2, 1,],
  [1, 1, 0, 0,],
  [0, 0, 0, 0,]
],
[
  [1, 1, 1, 1,],
  [1, 1, 1, 6,],
  [1, 1, 1, 1,],
  [1, 1, 1, 1,],
  [1, 3, 1, 1,],
  [1, 1, 1, 1,]
],
[
  [1, 1, 1, 1,],
  [1, 1, 4, 1,],
  [1, 1, 1, 0,],
  [0, 0, 0, 0,],
  [0, 0, 0, 0,],
  [0, 0, 0, 0,]
]]

const getHomeColor = (value) => {
  switch (value) {
    case 1 :
      return '#555'
    case 2 :
      return '#1a73e8'
    case 3 :
      return '#ff0000'
    case 4 :
      return '#1d9bf0'
    case 5 :
      return '#bddec2'
    case 6 :
      return '#fffc00'
  }
}
