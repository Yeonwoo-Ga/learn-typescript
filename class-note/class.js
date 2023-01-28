function Person(name,age) {
    this.name = name;
    this.age = age;
}
const capt = new Person('캡틴',100)

class Person {
    //클래스 로직
    constructor(name, age){
        console.log('생성되었습니다')
        this.name = name;
        this.age = age;
    }//초기화 메서드
}

const hoho = new Person(); //생성되었습니다
console.log(hoho)