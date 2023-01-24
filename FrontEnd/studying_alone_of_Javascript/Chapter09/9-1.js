class StudentList {
  constructor () {
    this.list = []
  }

  add (student) {
    this.list.push(student)
  }

  printTable () {
    let output = '이름\t총점\t평균\n'
    for (const student of this.list) {
      output += `${student.이름}\t${student.getSum()}점\t${student.getAverage()}점\n`
    }
    console.log(output)
  }
}

class Student {
  // 생성자! → 클래스로 객체를 생성할 때 호출되는 녀석
  constructor (이름, { 국어, 영어, 수학, 과학 }) {
    // 속성을 만드는 부분!
    this.이름 = 이름
    this.국어 = 국어
    this.영어 = 영어
    this.수학 = 수학
    this.과학 = 과학
  }

  // 메서드를 만드는 부분!
  getSum () {
    return this.국어 + this.영어 + this.수학 + this.과학  
  }
  getAverage () {
    return this.getSum() / 4
  }
}

const students = new StudentList()
students.add(new Student('구름', { 국어: 87, 영어: 98, 수학: 88, 과학: 90 }))
students.add(new Student('별이', { 국어: 92, 영어: 98, 수학: 96, 과학: 88 }))
students.add(new Student('겨울', { 국어: 76, 영어: 96, 수학: 94, 과학: 86 }))
students.add(new Student('바다', { 국어: 98, 영어: 52, 수학: 98, 과학: 92 }))

students.printTable()
