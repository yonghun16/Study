/* Polymorhism */
// 다형성이란, 여러 타입을 받아들임으로써 여러 형태를 가지는 것을 의미 'any'를 사용하는 것은 어떤 타입이든 받을 수 있다는 점에서 'generics'과 같지만, 함수를 반환하는데 있어 'any'는 받았던 인수들의 타입을 활용하지 못한다.  즉! 'generics'은 해당 정보를 잃지 않고 타입에 대한 정보를 다른 쪽으로 전달할 수 있다는 점이 다르다
console.log();
console.log("== Polymorhism ==");

type SuperPrintType = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}

const superPrint: SuperPrintType = (arr) => arr[0];

console.log(superPrint([1, 2, 3, 4]))
console.log(superPrint([true, false, true]))
console.log(superPrint(["a", "b", "c"]))
