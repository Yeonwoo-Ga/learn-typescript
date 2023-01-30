class Person3 {
    public name : string;
    age : number;
    readonly log : string;

    constructor(name : string ,age : number){
        this.name = name;
        this.age = age;
    }
}

let haha = new Person3("haha", 28);
haha.name = 'hehe';


class Developer {

    get name() : string{
        return this.name;
    }

    set name(newValue : string){
        if(newValue && newValue.length>5){
            throw new Error('이름이 너무 깁니다')
        }
        this.name = newValue;
    }
}