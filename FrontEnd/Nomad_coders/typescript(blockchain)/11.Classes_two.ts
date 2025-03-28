/* Classes_two */

type WordType = {           // 단어의 타입을 객체로 지정
  [key: string]: string     // 파이썬의 '딕셔너리'처럼 < key: value > 형식 가능
}

class Word {                // 단어 클래스
  constructor(
    public term: string,    // 단어의 이름
    public def: string      // 단어의 설명
  ) { }
}

class Dict {                // 사전 클래스
  private wordList: WordType

  constructor() {
    this.wordList = {}      // 사전리스트(WordType 타입)의 빈 객체를 만듬
  }

  add(word: Word) {
    if (this.wordList[word.term] === undefined) {  // 사전리스트의 key(word.term)의 value(def)가 없을 때
      this.wordList[word.term] = word.def;         // key(word.term)의 value에 def를 추가
    }
  }

  def(term: string) {
    return this.wordList[term]  // 사전리스트의 key(term)의 value(def)를 반환
  }
}

const kimchi = new Word("kimchi", "한국의 음식");  // kimchi 단어 생성
const dict = new Dict()                            // 사전 생성

dict.add(kimchi);                     // kimchi 단어를 사전에 추가
console.log(dict.def("kimchi"));      // 사전에서 kimchi 단어의 설명(def)을 출력
