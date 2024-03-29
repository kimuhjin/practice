/////ES6 PRACTICE/////

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

***
//Set으로 유니크한 배열 만들기
let mySet = new Set();
console.log(toString.call(mtSet));///[object Set], object에 Set이란 타입이 나온다.
//set의 특장 : 중복없이 유일한 값을 저장하려고 할 때 & 이미 존재하는지 체크할 때 유용.

mySet.add("crong");//mySet안에 "crong"값을 추가한다.
mySet.add("hary");
mySet.add("crong");

mySet.forEach(function(v){
    console.log(v);///"crong" "hary" , forEach를 써서 값을 순회 하여 결과값을 출력하는데, 그중 중복된 값을 제외하고 나온다. add로 중복된 값을 보내도 오류 없이 자동으로 중복값을 제외시키고 출력한다.
})
console.log(mySet.has("crong"))///true , mySet 데이터안에 ("crong")이란 값이 있는지 체크 할 수 있다.

mySet.delete("crong");///add와 반대로 delete를 써서 값을 삭제 할 수 있다.

***
//WeakSet으로 효과적으로 객체타입 저장하기.
//WeakSet은 참조를 가지고 있는 객체만 저장이 가능하다. 객체형태를 중복없이 저장하려고 할 때 유용하다.
let arr = [1,2,3,4];
let ws = new WeakSet();
ws.add(arr);
console.log(ws)///[1,2,3,4,]
ws.add(111);
console.log(ws)///invalid value
ws.add("111");
console.log(ws)///invalid value
ws.add(null);
console.log(ws)///invalid value
ws.add(function(){});
console.log(ws)///[1,2,3,4] function은 참조를 가지고 있는 객체이기 때문에 들어갈 수 있다.

let arr2 = [5,6,7,8];
let obj = {arr,arr2};//object를 생성해 obj에 배열 arr,arr2의 키값을 저장한다
ws.add(arr2);
ws.add(obj);
console.log(ws);///[5,6,7,8] [1,2,3,4] Object{arr:Array(4), arr2:Array(4)}

arr = null;
console.log(ws);
console.log(ws.has(arr), ws.has(arr2));///[5,6,7,8] [1,2,3,4] Object{arr:Array(4), arr2:Array(4)}, false ture 
//arr2 배열의 값은 가비지 컬렉션 대상이 되지 않기때문에 유효 하다. arr의 값은 weakset에선 저장을 하고 있는것처럼 보이지만 유효하지 않은 객체란것을 알기 때문에 유효한 값인지 판단 하기 위해 ws.has()를 썼을때 false가 나오게 된다.

***
//Map & WeakMap 추가정보를 담은 객체 저장하기
//Array를 개선한 자료구조는 Set, WeakSet / Object에서 특정한 용도로 쓰이는 것은 Map, WeakMap
//map 은 key,value구조(dictionary 구조), 즉 어떤 객체만 저장하는것이 아니고 그 객체에 대한 부연적인 설명들, 딸려있는 자식들, 추가적인 정보를 같이 호환할때 매우 유용하다. 특이하게 key값에 객체를 저장한다.

let wm = new WeakMap();
let myfun = function(){};//이 함수가 얼마나 실했됐나 알고자 할때.
wm.set(myfun.0);
console.log(wm)///WeakMap { function => 0 }
for(let i=0;i<10;i++){
    count=wm.get(myfun);//key값에 따라 value값을 얻는다.
    count++;
    wm.set(myfun, count);
}
console.log(wm);///WeakMap { function => 10 }
console.log(wm.get(myfun));///10

myfun = null;
console.log(wm.get(myfun));///undefined , function을 초기화 하게 되면 없다고 나온다
console.log(wm.has(myfun));///false

***
//WeakMap 클래스 인스턴스 변수 보호하기
function Area(height,width){
    this.height = height;
    this.width = width;
}//Area객체를 만들어 이 객체에 height와 width 값을받아 객체안에 넣어준다
Area.prototype.getArea(){
    return this.height * this.width;
}

let myarea = new Area(10,20);
console.log(myarea.getArea());///200
console.log(myarea.height());///10
///////위에 코드는 인스턴스 변수르 보호해줄수 없다. 아래는 인스턴스 변수의 값을 보호 해줄 수 있는 코드.
const wm = new WeakMap();
function Area(height,width){
    wm.set(this, {height,  width})//this, 즉 현재의 객체에다가 두가지 값을 몰래 숨겨둔다. 단점은 class밖 전역공간에 보관해놓는 것이다.
}
Area.prototype.getArea() = function(){
const {height, width} = wm.get(this);// 지역변수로 써서 외부에서 접근이 안 되게 한다. this값에 저장되있는 값을 뽑아서 
return height * width; // 값들을 this로부터 뽑아서 계산후 return 해준다. 
}

let myarea = new Area(10,20);
console.log(myarea.getArea());///200
console.log(myarea.height());///undefined
//private한 변수를 클래스에서 만들어서 쓸때는 외부의 전역공간에 옴길 수가 있는데, 그 때 이왕이면 WeakMap을 이용해서 보관을 하면 효율적이다.
myarea = null;
console.log(wm);///WeakMap {Area {}=> Object {height: 10, width: 20}}
console.log(wm.has(myarea));///200 false , WeakMap이 전역 공간에 있을 때 효율적으로 동작한다.

const obj = {};
function Area(height,width) {
    obj.height = height;
    obj.width = width;
}
Area.prototype.getArea = function(){
    return obj.height * obj.width;
}
console.log(myarea.getArea());///200
console.log(obj);///Object {height :10, width: 20} , 가비지 컬렉션이 전혀 되지 않은 상황이다. object값이 계속 유지 된다.

***
///실습 Destructuring and Set를 활용하여 Lotto 번호 만들기.
//1.유일한 값을 추출하는 과정에는 set을 사용
//2.getRandomNumber함수에 변수를 전달하는 과정에서 destructuring을 사용
const SETTING = {
    name : "LUCKY LOTTO!",
    count : 6,
    maxNumber : 45
  }
  
  function getRandomNumber(maxNumber) {
    const randomSet = new Set(); //randomSet에 new Set()을 할당, set()을 써 중복없이 유일한 값을 받아온다.
    
    for (let i = 0; i < SETTING.count;/*SETTING의 count 값을 받아옴*/ i++) {
      let randomNumber; //randomNumber변수를 만듬 
      
      do {
        randomNumber = Math.floor(Math.random() * (SETTING.maxNumber - 1)) + 1;
        //Math.random() : 0에서 1사이의 값을 무작위로 할당받음 & Math.floor : 소수점을 제외시켜 정수를 얻음
      } //randomNumber에 랜덤 값을 할당 받음
      while (randomSet.has(randomNumber))//do while문은 while이 true일때만 동작한다. randomSet안에 randomNumber가 존재한다면 true를 반환받아 do문을 실행한다.
      //여기서 do while문의 목적은 랜덤값을 할당 받을때 중복값이 들어올수 있는데, 중복값이 들어올 경우 do while문을 이용해 randomSet안에 이미 이전에 할당 받은 randomNumber값이 있을경우 true를 반환해 do문을 실행 시키고, randomSet에 할당받았던 값이 아닌 다른 숫자를 다시 받아온다. do while이 없다면 중복된 숫자들이 한번만 결과값으로 나오게 되어 최종 로또번호 갯수에 영향을 끼친다.

      //중복이 없다면 do while문을 건너 뛰고 바로 다음 코드를 실행한다.

      randomSet.add(randomNumber);//true라면 set의add기능을 이용하여 randomSet에 위에서 무작위로 만든 randomNumber값을 저장시킨다.
    }
    
    return Array.from(randomSet).sort((a, b) => a - b)/*[#Q].sort를 안 써도 콘솔로 값이 잘 출력된다. 왜 써야 하는걸까? */;//randomset으로부터 나온 값들로 부터 배열을 만들어 배열을 function에 반환한다.
  }

  console.log(SETTING.name);///"LUCKY LOTTO!"
  console.log(getRandomNumber(SETTING.maxNumber));///[a, b, c, d, e, f]
  
  ***
  //Template 처리
  const data = [
    {
        name : 'coffee-bin',
        order : true,
        items ; ['americano', 'milk', 'green-tea']
    },
    {
        neam : 'starbucks'
        order : false
    }
]
//Template 처리는 UI계발에서 굉장히 중요한 작업이다. Json으로 응답을 받고, javascript object로 변환한 후에 어떠한 데이터처리 조작을 한 후에 dom애 추가.
//실제로 dom에 추가하는 일이 UI개발에서 빈번하고 어려운 작업이다. 그 이유는 데이터 + HTML문자열의 결합이 필요하기 때문이다.

const template = `<div>welcome $[data[0].name] !!`
console.log(template);/// "<div>welcome coffee-bean !!"

***
//Tagged Template Literals
const data = [
    {
        name : 'coffee-bin',
        order : true,
        items ; ['americano', 'milk', 'green-tea']
    },
    {
        neam : 'starbucks'
        order : false
    }
]
function fn(tags, name, items){
    console.log(tags);///["<div>welcome", !!</div><h2>주문가능항목</h2><div>, "</div>"]
    if(typeof items ==="undefined"){
        items = "주문가능한 상품이 없습니다";
    }
    return(tags[0] + name + tags[1] + items + tags[2]);
}
const template = fn`<div>welcome $[data[0].name] !!</div>
    <h2>주문가능항목</h2><div>$[data[0].items]</div>`;
console.log(template);///"<div>welcome coffee-bean !!</div> <h2>주문가능항목</h2><div>americano,milk,green-tea</div>"

const template = fn`<div>welcome $[data[0].name] !!</div>
    <h2>주문가능항목</h2><div>$[data[1].items]</div>`;
console.log(template);///"<div>welcome starbucks !!</div> <h2>주문가능항목</h2><div>주문가능한 상품이 없습니다.</div>"

data.forEach((v) => {
    let template = fn`<div>welcome $[v.name] !!</div>
    <h2>주문가능항목</h2><div>$[v.items]</div>`;
    console.log(template);///"<div>welcome coffee-bean !!</div> <h2>주문가능항목</h2><div>americano,milk,green-tea</div>" "<div>welcome starbucks !!</div> <h2>주문가능항목</h2><div>주문가능한 상품이 없습니다.</div>"
});

***
//Arrow function 활용
setTimeout(function(){
console.log("settimeout");/// "settimeout" (1초뒤에 실행 됨)
},1000);//setTimeout은 JS callback 함수중 하나이다. 나중에 필요한 시점에 실행된다. 

//function 을 "()=>"로도 쓸 수 있다.
setTimeout( () => {
    console.log("settime arrow");/// "settime arrow" (1초뒤에 실행 됨)
    },1000);

let newArr = [1,2,3,4,5].map(function(value, index, object){//callback 함수의 단점은 어떤 함수의 인자로 들어가는데, 그 인자에 있는 함수가 너무 길다는 점이다.
    return value * 2;
});
console.log(newArr);///[2,4,6,8,10] 

let newArr = [1,2,3,4,5].map( (v) => {//parameter가 value만 필요하기 때문에 v만 쓴다.
    return v * 2; 
});
console.log("arrow newArr" , newArr);///[2,4,6,8,10]

let newArr = [1,2,3,4,5].map( (v) => v * 2);//ES6 에선 return을 생략해서 쓸 수도 있다, .map()안에 있는 syntax를 유지하면서 안에 있는 코드가 callback함수 인것을 인식한다. =>뒤에 나와있는 state를 그대로 반환하게 돼있다. 짧은코드들은 brace( {},대괄호를 뜻함 )없이 간단하게 쓰는 경우가 많다. 
console.log("arrow newArr" , newArr);///[2,4,6,8,10]
//map이나 foreach,filter,reduce등 Array관련된 method를 쓸 때 callback 함수를 이용해 간단하게 코드를 짤 수 있다.

***
//Arrow function 의 this context

