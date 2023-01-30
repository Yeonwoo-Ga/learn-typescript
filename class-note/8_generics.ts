// function logText(text){
//     console.log(text)
//     return text;
// }

// logText('hi'); //문자열 hi
// logText(10); // 숫자 10
// logText(true)// 진위값 true

// function logText<T>(text : T) :T{
//     console.log(text);
//     return text;
// }

function logText(text : string | number)

logText('하이')//호출 시점에 문자열이나 숫자 등 타입을 넘겨 줄 수 있는것이 제네릭
// logText<string>('헬로')//string타입임을 명시해줄 수 있다.

logText('a');
logText(10);