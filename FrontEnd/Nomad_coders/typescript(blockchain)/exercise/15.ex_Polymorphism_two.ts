
interface Sstorage<T> {
  [key: string] : T
}

class Lstorage<T> {
  private storage: Sstorage<T> = {}

  set(key: string, value: T) {
    this.storage[key] = value;
  }
  get(key: string) {
    console.log(this.storage[key])
  }
}

const data = new Lstorage<string>

data.set("name", "mefn")
data.get("name")


