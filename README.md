# 숫자게임 with react/redux/router

1~16까지 생성된 숫자를 순서대로 빠르게 누르는 게임입니다.
리덕스와 라우터 공부를 위해 제작했습니다.

# 빠른시작

## 클론

```
git clone https://github.com/Lavegaa/NumberGame.git
```

```
cd number-game
```

## dependencies 설치

```
npm install
```

or

```
yarn
```

## 시작

```
npm start
```

or

```
yarn start
```

# 라이브러리

- react-redux
- redux
- react-router-dom
- immer
- styled-components
- react-icons

**리덕스는 Ducks구조를 가지고 있습니다.**

```
store
  modules
    numbergame.js
```

**immer라이브러리는 랜덤된 숫자 타일을 생성하기 위해 사용됐습니다.**
immer의 produce를 사용하면 불변성을 유지한 채로 상태관리를 할 수 있습니다.

```
produce(prevState, draftState =>{
  return draftState;
});
```
