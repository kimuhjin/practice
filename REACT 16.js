///Fragment
class ReturnTypes extends Component{
    render(){
        return(
            [<header key={1}></header>,
            <div key={2}></div>,
            <footer key={3}></footer>
            ]
                /// or 
            <span>
            <header />,
            <div />,
            <footer />
            </span>   
        )
    }
}
//이전에는 render안에서 한 개 아상을 return 할 때 위처럼 [, ,]를 쓰거나 <span></span>으로 묶어서 썼다.

import React, { Component, Fragment } from "react";
//위 처럼 Fragment를 추가해준다면
<Fragment>
<header />,
<div />,
<footer />
</Fragment>
//or   
<>
<header />,
<div />,
<footer />
</>
//이렇게 사용 할 수 있다.
//span을 사용하면 추후에 CSS랑 꼬일 수가 있는데 Fragment를 사용하면 그럴 일이 줄어든다. 

class ReturnTypes extends Component{
    render(){
        return "hello";
    }
}

class App extends Component{
    render(){
        return(
            <Fragment>
                <ReturnTypes />
            </Fragment>
        );
    }
}
//위처럼 Fragment를 사용하면 Component에 있는 String도 return 할 수 있다.

***
///Portals
//Portals은 리액트 루트 밖의 리액트를 넣을 수 있게 해준다.
index.html
<header>
    <h1>Can't touch this</h1>
    <span id="touchme"></span>
</header>
<div id="root"></div>

App.js
import { creatPortal } from "react-dom" //Portal은 react가 아닌 react dom에 위치해 있어 불러와야 한다.

class Portals extends Component{
    render(){
        return createPortal(<Message />, document.getElementById("touchme"));
    }
}

const Message = () => "Just touched it!";

class ReturnTypes extends Component {
    render(){
        return "hello"
    }
}

class App extends Component {
    render(){
        return(
            <Fragment>
                <ReturnTypes />
                <Portals />
            </Fragment>
        );
    }
}
/*출력화면
<h1>Can't touch this<h1>
just touched it!
hello
*/
///리액트 루트 밖에서 렌더를 할 때 사용할 수 있다.

***
///Error boundaries
///컴포넌트로 하여금 컴포넌트 children의 에러를 관리 할 수 있게 해준다. 만약에 App에서 ReturnType이나 Portal이 에러를 만들면 App에서 관리 할 수 있다. 이것을 유일하게 캐치 할 수 있는 컴포넌트는 App이고 만약 다른 컴포넌트내에서 오류가 난다먄 캐치 할 수 없다.
class ErrorMaker extends Component{
    state ={
        friends : ["jisu","eric","daal","lynn"]
    }
    render(){
        const { friend } = this.state;
        return friends.map(friend => ` ${friend} `);
    }
}

class App extends Component {
    render(){
        return(
            <Fragment>
               <ErrorMaker />
            </Fragment>
        );
    }
}
//에러를 발생하는 componentDidMount 추가
ComponentDidMount = () => {
    setTimeout(() => {
        this.setState({
            friends : undefined
        });
    }, 2000);
}; //데이터를 얻으려고 state를 변경 했지만 안에 undefined값만 있다. 

const ErrorFallback = () =>"Sorry something went wrong"


// 새로운 라이프 싸이클
class App extends Component {
    state = {
        hasError:false
    }
    componentDidCatch = (error, info) => {
        console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`)
        this.setState({
            hasError:true
        })
    }
    render(){
        return(
            <Fragment>
               <ErrorMaker />
               {hasError ? <ErrorFallback />: <ErrorMaker />} //만약 에러가 있다면 ErrorFallback이 실행된다.
            </Fragment>
        );
    }
}
/*출력화면
<ERROR...>
<h1>Can't touch this<h1>
just touched it! Sorry somthing went wrong
*/
//비록 App은 오류가 났지만 User가 보는 화면에선 오류가 나기전까지의 화면은 정상적으로 출력이 되고, ErrorFallback이 실행 되면서 문구가 출력이 된다. 이렇게 componenntDidCatch를 사용한다면 에러를 구분하고, 에러에 대응을 할 수 있다. 하지만 모든 컴포넌트마다 True / False를 만들어야 하는 단점이 있다.

***
/// Error Boundaries with Higeher Order Components
const BoundaryHOC = protectedComponent => 
    class Boundary extends Component {
    state = {
        hasError : false
    };
    componentDidCatch = () =>{
        this.setState({
            hasError : true
        });
    };
    render() {
        const { hasError } = this.state;
        if (hasError) {
            return <ErrorFallback />;
        } else {
            return <ProtectedComponent />;
        }
    }
};

const PPortals = BoundaryHOC(Portals) // 다른 컴포넌트에 있는 컴포넌트를 리턴한다.

class Portals extends Component{
    render(){
        return createPortal(<Message />, document.getElementById("touchme"));
    }
}

class App extends Component {
    render(){
        return(
            <Fragment>
                <PPortals />
            </Fragment>
        );
    }
}

***
///this setState null
//setState를 하면 컴포넌트는 업데이트를 하게되는데, setState null에서 컴포넌트를 언제 업데이트 할지 안 할지 결정하는 기능을 제공한다. 이 기능의 주 사용처는 react development process에서 컴포넌트를 업데이트 하고 싶지 않을 때 사용 된다.
import React, { Component } from "react";

class Controlled extends Component {
    state = {
        pizzas : 10
    };
    render(){
        const { pizzas } = this.state;
        return(
        <button>{`I have eaten ${pizzas} ${
            pizzas === 1 ? "pizza" : "pizzas"
        }`}</button>
        );
    }
}

class App extends Component {
    render(){
        return <Controlled />
    }
}

export default App;
/*
<button>I have eaten 10 pizzas</button>
*/

const MAX_PIZZAS = 20;

const eatPizza = (state,props) => {
    const { pizzas } = state;
    return{
        pizzas : pizzas + 1
    };
};

class Controlled extends Component {
    state = {
        pizzas : 10
    };
    render(){
        const { pizzas } = this.state;
        return(
        <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${
            pizzas === 1 ? "pizza" : "pizzas"
        }`}</button>
        );
    }
    _handleClick = () => {
        this.setState(eatPizza);
    }
}
/*
<button>I have eaten 1,2,3,4,5...9999999~pizzas</button>
*/

const eatPizza = (state,props) => {
    const { pizzas } = state;
    if (pizzas < MAX_PIZZAS){
        return{
            pizzas : pizzas + 1
        };
    } else {
        return null
    }
};

class Controlled extends Component {
    state = {
        pizzas : 10
    };
    render(){
        const { pizzas } = this.state;
        return(
        <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${
            pizzas === 1 ? "pizza" : "pizzas"
        }`}</button>
        );
    }
    _handleClick = () => {
        this.setState(eatPizza);
    }
}
/*
<button>I have eaten 1,2,3,4,5...20pizzas</button>
*/
///Return null을 setState해서 state를 죽이지 않고 교체한다.