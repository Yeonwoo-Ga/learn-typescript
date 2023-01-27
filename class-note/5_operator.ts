// function logMessage(value : string) {
//     console.log(value)
// }

// logMessage("안녕");

//하나의 타입 이상을 쓸 수 있게하는 것이 유니온타입
function logMessage(value : string | number){
    if(typeof value === 'number'){
        value.toLocaleString();//number의 속성들을 사용할 수 있게 된다.
    }else if(typeof value === 'string'){
        value.toUpperCase()
    }
    throw new TypeError('value must be string or number');
}

logMessage(39)

let minsu : string | number | boolean;

interface Developer1 {
    name : string;
    skill : string;
}

interface Person23 {
    name : string;
    age : number;
}

// function askSomeone(someone : Developer1 | Person23){
//     someone.age
//     someone.name
//     someone.skill
// }
//age와 skill은 보장할 수 없기때문에 에러를 일으킨다

let capt : string & number & boolean //세가지를 만족하는 하나의 타입을 만족할 수 없기때문에 never 타입이 된다.


function askSomeone(someone : Developer1 & Person23){
    someone.age
    someone.name
    someone.skill
}

askSomeone({name : '디벨로퍼', skill : '웹 개발'})
askSomeone({name : '하이', age : 30})
//age, name, skill을 모두 포함한다.