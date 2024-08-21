## 제네릭 (Generics)

우리가 프로그래밍 할떄 '변수'라는 저장소를 사용하는 이유는 데이터 값의 유연성을

위해서이다, 이러한 개념을 봤을때 타입스크립트에서 `number[]` OR `string` 이며

사용했던 타입은 항상 고정되어 절대 변하지 않는 상수역할을 한다, 그리고 여기에 약간의

유연성을 가미한다면 `number | string | undefined` 처럼 쓸 수 있는 유니온 타입이 있다

하지만 이 프로그래밍 환경에서는 상황이 유니온 타입만으로 정할 수 없다, 더 유연한

장치가 있는데 그것이 바로 **제네릭(generic)** 타입이다

간단하게 말하자면 타입의 변수화라고 할 수 있다

### 유니온 타입의 한계

```typescript
// '+' 연산자를 'string | number' 및 'string | number' 형식에 적용할 수 없습니다.ts(2365)
function add(x: string | number, y: string | number): string | number {
  return x + y;
}

add(1, 2); // 3
add("hello", "world"); // 'helloworld'

add(1, "2"); // Error
```

### 제네릭의 유연성

```typescript
// 인수들을 받아서 배열로 만들어주는 메소드
function toArray<T>(a: T, b: T): T[] {
   return [a, b];
}

// 만약 화살표 함수로 제네릭을 표현한다면 다음과 같이 된다.
const toArray2 = <T>(a: T, b: T): T[] => { ... }


toArray<number>(1, 2); // 숫자형 배열
toArray<string>('1', '2'); // 문자형 배열
toArray<string | number>(1, '2'); // 혼합 배열

// 사실 컴파일러는 전달하는 인수의 타입을 보고 스스로 추론하기 때문에 함수 호출할때 제네릭을 안써줘도 알아서 추론한다.
toArray(1, 2);
toArray('1', '2');
toArray<string | number>(1, '2'); // 하지만 가끔 자동 타입 추론이 잘안되는 경우가 있기 때문에 직접 제네릭을 선언해야한다.
```

Learn Mode [Document](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Generic-%ED%83%80%EC%9E%85-%EC%A0%95%EB%B3%B5%ED%95%98%EA%B8%B0)
