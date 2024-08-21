// 제네릭 타입이 아닙니다. ❌ 일반 타입 입니다. 👍
// type PersonType = {
//   name: string;
// };

// 제네릭 타입이 맞습니다. 👍
type PersonType<T> = {
  name: string;
  age: T;
};

const person: PersonType<any> = {
  name: "신성민",
  age: 30,
};
