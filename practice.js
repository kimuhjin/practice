/////PRACTICE/////
*
function home(){
    const list = ["apple","orange","banana"];
    list.push("watermelon")
    console.log(list)///["apple","orange","banana","watermelon"]
}
home();
//const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
*
const list = ["apple","orange","banana"];
list2 = [].concat(list,"watermelon");
console.log(list2)/// ["apple","orange","banana","watermelon"]
// immutable array를 만들었다. concat으로 데이터를 추가하면 원본인 list가 바뀌는것이 아닌 list를 복제한 복사본에 데이터를 추가해, 원본 데이터가 변경되지 않는다. (list === list2 =>false)
*
let str = "hello world ! ^^ ~~";
let matchstr= "hello";// matchstr에 입력된 string값만큼 str로부터 잘라내어 서로 비교한다.
console.log(str.startsWith(matchstr));///true, 같지 않다면 false
let matchstr1= "^ ~~";
console.log(str.endsWith(matchstr1));///true, 같지 않다면 false
console.log(str.includes("world"));///str안에 "world"이 포함 된다면 true
*
var data = [1,2,undefined,NaN,null,""];
Array.prototype.getIndex=function(){};
-for(var i=0; i<data.length;i++){
    console.log(i)///0,1,2,3,4,5
}
-data.forEach(function(value){
    console.log(value);///1,2,undefined,NaN,null,""
});
-for(let idx in data){
    console.log(data[idx]);///1,2,undefined,NaN,null,"",funciton(){}
    //Object에서 자기 자신이 가지고 있는 객체 이외에 prototype객체를 이용해서 상위에 추가된 객체들도 for in문에서 나타낸다는 문제점을 가지고 있다. 그래서 for in문은 array서 쓰는것을 비추천한다.
}
-for(let value of data){
    console.log(value);///1,2,undefined,NaN,null,""
    //for문을 순회할때는 위와같이 for in문에 문제점이 있어서, for of를 쓰는것을 추천한다.
}
var str = "hello !!";
for(let value of str){
    console.log(value);///"h","e","l","l","o"," ","!","!"
}
*
let pre = ["apple","orange",100];
let newData = [...pre];
console.log(newData);///["apple","orange",100]
console.log(pre === newData);///false, 두개는 다른 데이터, 기존에 참조를 끊고 새로운 데이터를 메모리에 새로 할당 받아 저장한다.
//Spread Operator, 펼침연산자.
*
let pre = [100,200,"hello",null];
let newData = [0,1,2,3, ...pre, 4];
console.log(newData);///[0,1,2,3,100,200,"hello",null, 4]

function sum(a,b,c){
    return a+b+c; 
}
let pre = [100,200,300];
console.log(sum.apply(null,pre));///600
//배열 그대로를 전달하고 싶을땐.apply를 쓴다. 첫번째 인자값은 그냥 null로 전달받고, 두번째 인자 값에 배열명을 써주면 된다.
