import React from "react";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class LifecycleEx extends React.Component {
  // 생성자 함수
  // 생성이 될 때 생성자 함수가 뜨게 됨
  constructor(props) {
    super(props);

    this.state = {
      cat_name: "나비",
    };

    console.log("in constructor!");
  }

  changeCatName = () => {
    // 다음 강의에서 배울, state 업데이트 하는 방법입니다!
    // 지금은 componentDidUpdate()를 보기 위해 쓰는 거니까, 처음보는 거라고 당황하지 말기!
    this.setState({ cat_name: "바둑이" });

    console.log("고양이 이름을 바꾼다!");
  };

  // 가상 Dom이 실제 Dom으로 올라간 다음에 componentDidMount 라이프 사이클 함수가 한 번 실행
  // 화면이 생길 때 딱 한 번 실행
  // 업데이트(리랜더링)할 때는 실행되지 X
  // 보통 AJAX, addEventListener 등을 componentDidMount에서 실행
  componentDidMount() {
    console.log("in componentDidMount!");
  }

  // 가상 Dom이 실제 Dom으로 올라간 다음
  // 리렌더링이 끝난 다음에 실행이 되는 라이플 사이클 함수

  // 같은 말 ↓↓

  // 어떻게 바뀔 것인지에 관련된 내용이 render에 들어가 있음
  // render 안에 있는 return에 있는 것들이 리액트 요소에 올라가고 가상 Dom에서 실제 Dom으로 올라가는 것
  // 이렇게 실제 Dom으로 올라가고 나면 componentDidUpdate 라이플 사이클 함수 실행
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    // 이전에 내가 가지고 있던 props와 state를 콘솔창에 찍어줌
    console.log("in componentDidUpdate!");
  }

  // component가 화면에서 사라질 때 componentWillUnmount 라이플 사이클 함수 실행
  componentWillUnmount() {
    console.log("in componentWillUnmount!");
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  // 랜더 함수 안에 들어와 만들어둔 컴포넌트 내용 return 아래의 DOM에 붙이겠다는 뜻
  render() {
    console.log("in render!");

    return (
      <div>
        {/* render 안에서 컴포넌트의 데이터 state를 참조할 수 있습니다. */}
        <h1>제 고양이 이름은 {this.state.cat_name}입니다.</h1>
        <button onClick={this.changeCatName}>고양이 이름 바꾸기</button>
      </div>
    );
  }
}

export default LifecycleEx;
