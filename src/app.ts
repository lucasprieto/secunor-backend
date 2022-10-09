import { NODE_ENV } from '@config'

class App {
  public env: string

  constructor() {
    this.env = NODE_ENV
  }
}

export default App
