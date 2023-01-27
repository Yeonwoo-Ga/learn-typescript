enum Shoes {
    Nike,
    Adidas ,
    NewBalance 
}
//이넘은 특정 값들의 집합을 의미하는 자료형이다.


const MyShoes = Shoes.Nike

// console.log(MyShoes); // 0

//예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer : Answer){
    if (answer === Answer.Yes){
        console.log('정답입니다')
    }
    if (answer === Answer.No){
        console.log('오답입니다')
    }
}
let a = Shoes.Nike
let reverseA = Shoes[a]
console.log(a)
console.log(reverseA)
