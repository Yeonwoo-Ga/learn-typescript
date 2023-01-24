interface Users {
    age : number;
    name : string;
}

//변수에 활용한 인터페이스
const seho : Users = {
    age : 11,
    name : 'seho'
}

//함수에 인터페이스 활용

function getUser(user : Users){
    console.log(user)
}


const capt = {
    name : '캡틴',
    age : 40
}

getUser(capt);

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction{
    (a:number, b:number)
}

let sum1: SumFunction;

sum1 = function(a:number, b:number) : number{
    return a+b;
}

//인덱싱
interface StringArray{
    [index : number] : string
}

let arr1 : StringArray = ['a','b','c']
//arr1[0] = 10

//딕셔너리 패턴
interface StringRegexDictionary{
    [key : string] : RegExp
}

let obj1 : StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile : /\.js$/
}

//인터페이스 확장
interface Person {
    name : string;
    age : number;
}

interface Developer extends Person{
    language : string;
}

let captain : Developer = {
    language : 'ts',
    age : 100,
    name : '캡틴'
}



