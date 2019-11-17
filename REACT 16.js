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
////이전에는 render안에서 한 개 아상을 return 할 때 위처럼 [, ,]를 쓰거나 <span></span>으로 묶어서 썼다.

import React, { Component, Fragment } from "react";
/// 위 처럼 Fragment를 추가해준다면
<Fragment>
<header />,
<div />,
<footer />
</Fragment>
/// or   
<>
<header />,
<div />,
<footer />
</>
///이렇게 사용 할 수 있다.
///span을 사용하면 추후에 CSS랑 꼬일 수가 있는데 Fragment를 사용하면 그럴 일이 줄어든다. 

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
///위처럼 Fragment를 사용하면 Component에 있는 String도 return 할 수 있다.
