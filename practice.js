/////PRACTICE/////

***
function home(){
    const list = ["apple","orange","banana"];
    list.push("watermelon")
    console.log(list)///["apple","orange","banana","watermelon"]
}
home();
//const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.

***
const list = ["apple","orange","banana"];
list2 = [].concat(list,"watermelon");
console.log(list2)/// ["apple","orange","banana","watermelon"]
// immutable array를 만들었다. concat으로 데이터를 추가하면 원본인 list가 바뀌는것이 아닌 list를 복제한 복사본에 데이터를 추가해, 원본 데이터가 변경되지 않는다. (list === list2 =>false)

***
let str = "hello world ! ^^ ~~";
let matchstr= "hello";// matchstr에 입력된 string값만큼 str로부터 잘라내어 서로 비교한다.
console.log(str.startsWith(matchstr));///true, 같지 않다면 false
let matchstr1= "^ ~~";
console.log(str.endsWith(matchstr1));///true, 같지 않다면 false
console.log(str.includes("world"));///str안에 "world"이 포함 된다면 true

***
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

***
let pre = ["apple","orange",100];
let newData = [...pre];
console.log(newData);///["apple","orange",100]
console.log(pre === newData);///false, 두개는 다른 데이터, 기존에 참조를 끊고 새로운 데이터를 메모리에 새로 할당 받아 저장한다.
//Spread Operator, 펼침연산자.

***
let pre = [100,200,"hello",null];
let newData = [0,1,2,3, ...pre, 4];
console.log(newData);///[0,1,2,3,100,200,"hello",null, 4]

function sum(a,b,c){
    return a+b+c; 
}
let pre = [100,200,300];
console.log(sum.apply(null,pre));///600
//배열 그대로를 전달하고 싶을땐.apply를 쓴다. 첫번째 인자값은 그냥 null로 전달받고, 두번째 인자값에 배열명을 써주면 된다.
console.log(sum(...pre));///600
//배열형태의 인자값을 던져줄때 펼침 연산자를 쓰면 더 편리하다.

***
//ES2015 from 메서드로 진짜 배열 만들기
function addMark(){
    let newData = [];
    for (let i=0; i<arguments.length; i++){
        newData.push(arguments[i] + "!");
    }
console.log(newData);///["1!","2!","3!","4!","5!"]
}
addMark(1,2,3,4,5);

function addMark(){
    let newArray = Array.from(arguments);//arguments로부터 배열을 만든다.
    let newData = newArray.map(function(value){
   /* let newData = arguments.map(function(value)*/
        //arguments는 여기서 가짜 배열이기 때문에 진짜 배열만 인식하는 .map에서 인식이 안된다. 그러므로 위에 Array.from을 써서 진짜 배열로 만들어 준다.
        return value + "!";
    })
console.log(newData);///["1!","2!","3!","4!","5!"]
}
addMark(1,2,3,4,5);

***
//실습예제 1 /* filter,includes,from을 사용해서 문자열'e'가 포함된 노드로 구성된 배열을 만들어서 반환하기 */
<html>
<ul>
<li>apple</li>
<li>banana</li>
<li>orange</li>
<li>watermelon</li>   
</ul>
</html>

function print(){
    let list = document.querySelectorAll("li");//"li"로 된 배열을 뽑아와서 list에 저장.
    let listArray=Array.from(list);//Array.from을 써서 li노드로 구성된 배열을 만든다.
    let eArray=listArray.filter(function(v){//리턴값이 true인 요소만 모아서 새로운 배열을 eArray에 저장한다.
    return v.innerText.includes("e");//v라는 innerText(domain의 속성을 이용해서 문자열[innerText:"apple"]을 뽑아낸다)값에서 .include를 이용해 "e"를 포함한 배열들을 리턴한다.
    });
    return eArray///
}
console.log(print());/// 3 

***
//간단히 객체 생성하기
const name ="crong";
const age =33;

const obj = {
    name : name;//key : value
    age : age;//key : value
}

function getObj(){
    const name = "crong"
    const getName = function(){
        return name;
    }
    const setName = function(newname){
        name=newname;
    }
    const printName = function(){
        console.log(name);
    }   
    return{
        getName : getName,
        setName : setName
    }//ES6부터는 key값과 value값이 같을때 굳이 위 리턴안에 있는것처럼 key : value 처럼 안 써도 되고, 그냥 return{getName,setName} 으로 써도 된다. 또한 그냥 value값도 넘길 수있다. 
}
var obj = getObj();//get object는 새로운 object 형태로 반환하고 싶을때 사용
console.log(obj.getName());///"crong"

***
//Destructuring Array
 let data = ["crong", "honux","jk","jinny"];
 let jisu = data[0];
 let jung = data[2];//배열에 데이터를 지정하여 넣을 수있다.

 let [jisu,,jung] = data;//[jisu,,jung]은 data배열 중 0번째,2번째 배열에 저장되어있는 값(crong,jk)를 ([jisu(0번째),(1번째),jung(2번째)]) jisu,jung으로 쓰겠다고 하는것이다. 
 console.log(jisu,jung);///"crong" "jk"

 ***
//Destructuring Object
let obj = {
    name : "crong",
    address : "korea",
    age : 10
}

let{name,age} = obj;
console.log(name.age);///"crong" 10

let{name:myName, age:myAge}; = obj;//다른이름으로 저장해서 쓸 수도 있다.
console.log(myName, myAge);///"crong" 10
//destructuring을 잘 이용하면 필요한 데이터(array,object)에서 key값, {}를 사용하여 원하는 위치의 index를 뽑을수 있다.

***
//Destructuring 활용 JSON파싱
var news = [
    {
        "title" : "sbs",
        "imgurl" : "http://sbsimage.com",
        "newslist" : [
            "sbs기사1",
            "sbs기사2",
            "sbs기사3",
            "sbs기사4",
            "sbs기사5"
        ]
    },
    {
        "title" : "mbc",
        "imgurl" : "http://mbcimage.com",
        "newslist" : [
            "mbc기사1",
            "mbc기사2",
            "mbc기사3",
            "mbc기사4",
            "mbc기사5"
        ]
    }
]; // JSON 형태

let[,mbc]= news;//[,mbc]인 이유는 mbc가 두번째 인덱스에 있기 때문에 "," 뒤에 써준다.
console.log(mbc);///[object Object]{mbc 관련된 값들...}
let {title,imgurl} = mbc;//Destructuring을 이용해 필요한 변수값을 뽑아 낼 수도 있다.
console.log(title, imgurl);/// "mbc" "http://mbcimage.com"

let[,{title,imgurl}] = news;//[] Destructuring을 통해 두번째 인덱스 값을 뽑았고, {} object Destructuring를 통해 필요한 key값만 뽑을 수 있다.
console.log(imgurl);///"http://mbcimage.com"

***
//Destructuring 활용_Event객체전달
var news = [
    {
        "title" : "sbs",
        "imgurl" : "http://sbsimage.com",
        "newslist" : [
            "sbs기사1",
            "sbs기사2",
            "sbs기사3",
            "sbs기사4",
            "sbs기사5"
        ]
    },
    {
        "title" : "mbc",
        "imgurl" : "http://mbcimage.com",
        "newslist" : [
            "mbc기사1",
            "mbc기사2",
            "mbc기사3",
            "mbc기사4",
            "mbc기사5"
        ]
    }
];
function getNewsList([,{newslist}])//매개변수,parameter기 때문에 여기서도 Destructuring을 할 수 있다.
{
    console.log(newslist);///["mbc기사1","mbc기사2","mbc기사3","mbc기사4","mbc기사5"]
}
getNewsList(news);

<html>
<div>
ajin950714
</div>
</html>

document.querySelectorAll("div").addEventListener("click",function(evt){
    console.log(evt.target);/// HTMLdiv 태그
});
document.querySelectorAll("div").addEventListener("click",function({target}){
    console.log(target.tagName);/// "DIV"
});//객체에서 필요한 형태만 받으려고 할때 {} Destructuring을 사용하면 손쉽게 원하는 정보만 뽑아낼 수 있다.
