from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

class Memo(BaseModel):
    id: str
    content: str

memos = []

app = FastAPI()

@app.post("/memos")
def create_memo(memo: Memo):
    memos.append(memo)
    return "성공공"

app.mount("/", StaticFiles(directory="static", html=True), name="static")

