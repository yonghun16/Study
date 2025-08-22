import redis.asyncio as redis
import asyncio

async def main():
    # --- Redis 준비 ---
    try:
        r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)
        await r.ping()
        print("✅ Redis 서버에 성공적으로 연결되었습니다!")
    except redis.ConnectionError as e:
        print("❌ Redis 서버에 연결할 수 없습니다. Docker에서 Redis가 실행 중인지 확인하세요.")
        print(e)
        return

    print("\n--- 1. 이름표 붙이기 (String) ---")
    await r.set('pikachu', '전기타입')
    print("'pikachu' 이름표를 붙였습니다.")

    pokemon_type = await r.get('pikachu')  # type: ignore
    print(f"pikachu의 타입은? 👉 {pokemon_type}")

    await r.delete('pikachu')
    print("'pikachu' 이름표를 제거했습니다.")
    print(f"다시 확인한 pikachu의 타입은? 👉 {await r.get('pikachu')}")  # type: ignore


    print("\n--- 2. 출석 도장 찍기 (INCR) ---")
    await r.delete('today_login') 

    login_count_1 = await r.incr('today_login')  # type: ignore
    print(f"첫 번째 로그인! 현재 접속: {login_count_1}명")

    login_count_2 = await r.incr('today_login')  # type: ignore
    print(f"두 번째 로그인! 현재 접속: {login_count_2}명")


    print("\n--- 3. 방명록 쓰기 (List) ---")
    await r.delete('chat_log')

    await r.rpush('chat_log', 'user1: 안녕!') # type: ignore
    await r.rpush('chat_log', 'user2: 반가워!') # type: ignore
    await r.rpush('chat_log', 'user1: 뭐해?') # type: ignore
    print("채팅 로그를 3개 남겼습니다.")

    full_log = await r.lrange('chat_log', 0, -1)  # type: ignore
    print("전체 채팅 로그 보기:")
    for log in full_log:
        print(f"  - {log}")


    print("\n--- 4. 개인정보 카드 만들기 (Hash) ---")
    player_key = 'player:100'
    player_info = {
        'name': '전사',
        'level': 5,
        'job': '검사'
    }
    await r.hset(player_key, mapping=player_info)  # type: ignore
    print(f"'{player_key}' 캐릭터의 정보를 만들었습니다.")

    player_job = await r.hget(player_key, 'job')  # type: ignore
    print(f"'{player_key}'의 직업은? 👉 {player_job}")

    all_info = await r.hgetall(player_key)  # type: ignore
    print(f"'{player_key}'의 전체 정보 보기:")
    for field, value in all_info.items():
        print(f"  - {field}: {value}")

    await r.aclose()
    print("\nRedis 연결을 종료했습니다.")


if __name__ == "__main__":
    asyncio.run(main())
