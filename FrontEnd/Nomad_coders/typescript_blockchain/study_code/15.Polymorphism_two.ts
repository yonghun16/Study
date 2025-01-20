/* Polymorphism_two */

interface ServerStorage<T> {  // 2. 인터페이스에 제네릭을 받고
  [key: string]: T            // 1. value에 제네릭을 쓰기위해
}

class LocalStorage<T> {       // 3. 클래스에서 제네릭을 받아
  private storage: ServerStorage<T> = {}   // 4. 받은 제네릭을 인터페이스로 넘겨줌
  set(key: string, value: T) {             // 5. value에 제네릭 사용
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key]
  }
  get(key: string): T {                    // 6. value를 반환할 땐 제네릭으로 반환
    return this.storage[key]
  }
  clear() {
    this.storage = {}
  }
}

const stingsStorage = new LocalStorage<string>()
const booleanStorage = new LocalStorage<boolean>()

stingsStorage.set("nico", "macos")
console.log(stingsStorage.get("nico"))

booleanStorage.set("ran", true)
console.log(booleanStorage.get("ran"))
