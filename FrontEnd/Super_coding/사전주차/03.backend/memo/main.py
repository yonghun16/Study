from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

class Memo(BaseModel):
    id: int
    content: str

memos = []


app = FastAPI()

# 메모 생성
@app.post("/memos")
def create_memo(memo: Memo):
    memos.append(memo)

# 메모 읽기
@app.get("/memos")
def read_memo():
    return memos

# 메모 수정
@app.put("/memos/{memo_id}")
def put_memo(req_memo: Memo):
    for memo in memos:
        if memo.id == req_memo.id:
            memo.content = req_memo.content
            return '성공'
    return '그런 메모는 없습니다.'

# 메모 삭제
@app.delete("/memos/{memo_id}")
def delete_memo(memo_id: int):
    for memo in memos:
        if memo.id == memo_id:
            memos.remove(memo)
            return '성공'
    return '그런 메모는 없습니다.'

app.mount("/", StaticFiles(directory="static", html=True), name="static")
