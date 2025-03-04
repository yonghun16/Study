from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    id: int
    content: str

items = ['맥북', '애플워치', '아이폰', '에어팟']

# path 방식
@app.get('/items/{id}')
def read_items_path(id):
    return items[int(id)]

# query 방식
@app.get('/items')
def read_items_query(skip:int=0, limit:int=10): # items?skip=1&limit=2
    return items[skip:skip+limit]               # ["애플워치", "아이폰"]

# requset body
@app.post("/items")
def post_item(item: Item):
    items.append(item.content)
    return '성공했습니다!'
