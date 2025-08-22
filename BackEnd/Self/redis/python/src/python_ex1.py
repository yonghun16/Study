import redis

try:
    r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)
    r.ping()
    print("Redis 서버에 성공적으로 연결되었습니다!")
except redis.ConnectionError as e:
    print(f"Redis 서버에 연결할 수 없습니다. Docker에서 Redis가 실행중인지 확인하세요.")
    print(e)
    exit()


print("\n--- 1. 이름표 붙이기 (String) ---")
# SET pikachu "전기타입"
r.set('pikachu', '전기타입')
print("'pikachu' 이름표를 붙였습니다.")

# GET pikachu
pokemon_type = r.get('pikachu')
print(f"pikachu의 타입은? {pokemon_type}")

# DEL pikachu
r.delete('pikachu')
print("'pikachu' 이름표를 제거했습니다.")
print(f"다시 확인한 pikachu의 타입은? 👉 {r.get('pikachu')}")


print("\n--- 2. 출석 도장 찍기 (INCR) ---")
# 이전에 실행한 값이 남아있을 수 있으니 먼저 키를 삭제합니다.
r.delete('today_login') 

# INCR today_login
login_count_1 = r.incr('today_login')
print(f"첫 번째 로그인! 현재 접속: {login_count_1}명")

# INCR today_login
login_count_2 = r.incr('today_login')
print(f"두 번째 로그인! 현재 접속: {login_count_2}명")


print("\n--- 3. 방명록 쓰기 (List) ---")
# 이전 로그가 남아있을 수 있으니 먼저 키를 삭제합니다.
r.delete('chat_log')

# RPUSH chat_log "..."
r.rpush('chat_log', 'user1: 안녕!')
r.rpush('chat_log', 'user2: 반가워!')
r.rpush('chat_log', 'user1: 뭐해?')
print("채팅 로그를 3개 남겼습니다.")

# LRANGE chat_log 0 -1
full_log = r.lrange('chat_log', 0, -1)
print("전체 채팅 로그 보기:")
for log in full_log:  # type: ignore
    print(f"  - {log}")

