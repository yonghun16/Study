// redis 라이브러리에서 createClient 함수를 가져옵니다.
import { createClient } from 'redis';

// --- 놀이터 입장하기: Redis 준비 ---
// 로컬 Redis 서버에 접속하기 위한 클라이언트를 생성합니다.
const client = createClient();

// 연결 에러가 발생했을 때 처리하는 리스너입니다.
client.on('error', (err) => console.log('Redis Client Error', err));

try {
  // Redis 서버에 실제로 연결합니다.
  await client.connect();
  // Redis 서버가 켜져 있는지 확인합니다 (ping -> PONG).
  await client.ping();
  console.log("✅ Redis 서버에 성공적으로 연결되었습니다!");
} catch (err) {
  console.log(`❌ Redis 서버에 연결할 수 없습니다. Docker에서 Redis가 실행 중인지 확인하세요.`);
  console.log(err);
  // Top-level에서 스크립트를 종료하려면 process.exit()를 사용합니다.
  process.exit(1);
}


console.log("\n--- 1. 이름표 붙이기 (String) ---");
await client.set('pikachu', '전기타입');
console.log("'pikachu' 이름표를 붙였습니다.");

const pokemonType = await client.get('pikachu');
console.log(`pikachu의 타입은? 👉 ${pokemonType}`);

// Node.js에서는 delete 대신 del을 사용합니다.
await client.del('pikachu');
console.log("'pikachu' 이름표를 제거했습니다.");
console.log(`다시 확인한 pikachu의 타입은? 👉 ${await client.get('pikachu')}`);


console.log("\n--- 2. 출석 도장 찍기 (INCR) ---");
await client.del('today_login');

const loginCount1 = await client.incr('today_login');
console.log(`첫 번째 로그인! 현재 접속: ${loginCount1}명`);

const loginCount2 = await client.incr('today_login');
console.log(`두 번째 로그인! 현재 접속: ${loginCount2}명`);


console.log("\n--- 3. 방명록 쓰기 (List) ---");
await client.del('chat_log');

// 명령어는 보통 camelCase(rPush, lRange) 형태입니다.
await client.rPush('chat_log', ['user1: 안녕!', 'user2: 반가워!', 'user1: 뭐해?']);
console.log("채팅 로그를 3개 남겼습니다.");

const fullLog = await client.lRange('chat_log', 0, -1);
console.log("전체 채팅 로그 보기:");
fullLog.forEach(log => {
  console.log(`  - ${log}`);
});


console.log("\n--- 4. 개인정보 카드 만들기 (Hash) ---");
const playerKey = 'player:100';
const playerInfo = {
  'name': '전사',
  'level': '5', // Hash의 모든 필드와 값은 문자열이어야 합니다.
  'job': '검사'
};
// JavaScript 객체를 바로 값으로 사용할 수 있습니다.
await client.hSet(playerKey, playerInfo);
console.log(`'${playerKey}' 캐릭터의 정보를 만들었습니다.`);

const playerJob = await client.hGet(playerKey, 'job');
console.log(`'${playerKey}'의 직업은? 👉 ${playerJob}`);

const allInfo = await client.hGetAll(playerKey);
console.log(`'${playerKey}'의 전체 정보 보기:`);
for (const field in allInfo) {
  console.log(`  - ${field}: ${allInfo[field]}`);
}


// 연결을 정상적으로 종료합니다. (Python의 aclose()와 유사)
await client.quit();
console.log("\nRedis 연결을 종료했습니다.");
