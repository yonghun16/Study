const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').split('\n');

// 별의 x,y 좌표 클래스
class StarXY {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// 두 별의 거리를 구하는 함수
function getStarDistance(fromStar, toStar) {
  const deltaX = fromStar.x - toStar.x;
  const deltaY = fromStar.y - toStar.y;
  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

let star = [];
let minStarDistance = 9999999999;  // 가장 가까운 두 별의 거리
let minStarCount = 0;              // 최단거리만큼 떨어진 전체 별의 쌍의 수

// 입력
const n = parseInt(input[0]);

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  star.push(new StarXY(x, y));
}

// 처리
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    const currentStarDistance = getStarDistance(star[i], star[j]);
    if (minStarDistance > currentStarDistance) {
      minStarDistance = currentStarDistance;
      minStarCount = 1;
    } else if (minStarDistance === currentStarDistance) {
      minStarCount++;
    }
  }
}

// 출력
console.log(minStarDistance.toFixed(1));
console.log(minStarCount);
