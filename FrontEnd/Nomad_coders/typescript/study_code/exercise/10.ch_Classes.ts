/*--------------------------------------
         Challenge - Classes

 * 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.
 * add: 단어를 추가함. 
 * get: 단어의 정의를 리턴함. 
 * delete: 단어를 삭제함. 
 * update: 단어를 업데이트 함.
 * showAll: 사전 단어를 모두 보여줌.
 * count: 사전 단어들의 총 갯수를 리턴함.
 * upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert) 
 * exists: 해당 단어가 사전에 존재하는지 여부를 알려줌. 
 * bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
 * bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
--------------------------------------*/

// 단어 클래스
class Word {
  constructor(
    public term: string,      // 단어명
    public def: string        // 단어 설명
  ) { }
}

// 사전에 등재될 단어리스트 타입
type WordListType = {
  [key: string]: string       // key:단어명, value:설명
}

// 사전 클래스
class Dict {
  private wordList: WordListType

  constructor() {
    this.wordList = {}
  }

  add(word: Word) {
    if (this.wordList[word.term] === undefined) {
      this.wordList[word.term] = word.def;
    }
  }

  get(term: string) {
    return this.wordList[term]
  }

  delete(term: string) {
    delete this.wordList[term]
    return `--- ${term} 삭제 ---`
  }

  update(term: string, def: string) {
    if (this.wordList[term] === undefined) console.log(`--- ${term}으로 등재된 단어가 없습니다. ---`)
    else this.wordList[term] = def;
  }

  showAll() {
    console.log(JSON.stringify(dictionary.wordList, null, 2))
  }

  count() {
    console.log(Object.keys(dictionary.wordList).length);
  }

  upsert(term: string, def: string) {
    this.wordList[term] = def;
  }

  exists(term: string) {
    if (this.wordList[term] !== undefined) console.log(`--- ${term}단어 존재함 ---`)
    else console.log(`--- ${term}단어 없음 ---`)
  }

  bulkAdd(words: Word[]) {
    words.forEach(word => {
      this.wordList[word.term] = word.def;
    })
  }
  bulkDelete(terms: String[]) {
    terms.forEach(term => {
      delete this.wordList[String(term)]
    })
    console.log(`${terms} 단어 삭제`)
  }

}

// 사전 객체 생성
const dictionary = new Dict()

// 단어 객체 생성
const gimbap = new Word("gimbap", "천국의 음식");
const ramen = new Word("ramen", "김밥의 친구");
const kimchi = new Word("kimchi", "라면의 파트너");

// 단어 추가
dictionary.add(gimbap)
dictionary.add(ramen)
dictionary.add(kimchi)
dictionary.showAll()

// 단어 정의 리턴
console.log(dictionary.get("gimbap"))
console.log(dictionary.get("ramen"))
console.log(dictionary.get("kimchi"))

// 단어 삭제
console.log(dictionary.delete("gimbap"))
dictionary.showAll()

// 단어 업데이트
dictionary.update("gimbap", "서민의 음식")
dictionary.update("kimchi", "단무지와 궁합 좋고~")
dictionary.showAll()

// 등재 단어 개수 출력
dictionary.count()

// 단어를 업데이트(존재하지 않을 시 이를 추가함) 
dictionary.upsert("gimbap", "서민의 음식")
dictionary.showAll()

// 해당 단어가 사전에 존재하는지 여부를 알려줌.
dictionary.exists("gimbap")

// 여러가 단어를 한번에 추가함
dictionary.bulkAdd([
  { term: "김치", def: "대박"},
  { term: "아파트", def: "비싸네~"}
])
dictionary.showAll()

// 여러가 단어를 한번에 삭제함.
dictionary.bulkDelete(["김치", "아파트"])
