// function

/*-----------------------------------------------------
 * 자바스크립트에서 함수는 “하나의 작업 또는 계산을 수행하는 코드 블록”
   입력(인자)을 받아서 어떤 연산을 수행하고, 결과(출력)를 반환하는 재사용 가능한 코드 조각
 * 매개변수 (Parameters)와 인자 (Arguments)
   - 매개변수(Parameters): 함수 정의 시 선언하는 변수
   - 인자(Arguments): 함수 호출 시 실제로 전달하는 값
-----------------------------------------------------*/

function logger() {
	console.log("logging...");
}

logger();
logger();
logger();

function buySomeFruits(bananaCount, lemonCount) {     // bananaCount, lemonCount  =  매개변수, Parameters
	const fruits = `바나나 ${bananaCount}개, 레몬 ${lemonCount}개를 샀다.`;
	return fruits;
}

const bananasAndLemons = buySomeFruits(4, 5);         // 4, 5  =  인자, Arguments
console.log(bananasAndLemons);
