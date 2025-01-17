interface User {
  name: string
}

interface User {
  lastName: string
}

interface User {
  health: number
}

interface Player extends User {

}

const nico: Player = {
  name: "nico",
  lastName: "las",
  health: 12
}
