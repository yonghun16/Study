type WordType = {
  [key: string]: string
}

class Word {
  constructor(
    public term: string,
    public def: string
  ) { }
}

class Dict {
  private wordList: WordType

  constructor(){
    this.wordList = {}
  }
}
