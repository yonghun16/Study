
type EmployeeInfo = {
  [key: number]: string
}

class Employee {
  constructor(
    public id: number,
    public name: string
  ){}
}

class Department {
  private EmplyeerList: EmployeeInfo

  constructor() {
    this.EmplyeerList = {}
  }

  add(employee: Employee) {
    if (this.EmplyeerList[employee.id] === undefined) {
      this.EmplyeerList[employee.id] = employee.name     // 추가
    }
  }

  showName(id: number) {
    return this.EmplyeerList[id]
  }
}

const yonghun16 = new Employee(1232, "song")

const depart1 = new Department()

depart1.add(yonghun16)
console.log(depart1.showName(1232))
