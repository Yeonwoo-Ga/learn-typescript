interface Person1 {
    name : string;
    age : number;
}

// type Person1 = {
//     name : string;
//     age : number;
// }

let inho : Person1 = {
    name : 'inho',
    age : 30
}

type Mystring = string;
let str1 : Mystring = 'hello';

type Todo = {id:string, title: string; done : boolean};
function getTodo(todo : Todo);