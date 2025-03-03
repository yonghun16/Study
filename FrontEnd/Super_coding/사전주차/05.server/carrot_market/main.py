from fastapi import FastAPI, UploadFile, Form, Response
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.staticfiles import StaticFiles
from fastapi_login import LoginManager
from fastapi_login.exceptions import InvalidCredentialsException
from typing import Annotated, clear_overloads
import sqlite3

con = sqlite3.connect('dd.db', check_same_thread=False)
cur = con.cursor()

cur.execute(
    """
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        price INTEGER NOT NULL,
        description TEXT NOT NULL,
        place TEXT NOT NULL,
        insertAt INTEGER NOT NULL
    );
    """)

cur.execute(
    """
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
    );
    """)

app = FastAPI()

SERCRET = "super-coding";
manager = LoginManager(SERCRET, '/login')

@manager.user_loader()

def query_user(id):
    con.row_factory = sqlite3.Row  # 컬럼명도 같이 가져옴
    cur = con.cursor()             # cursor 오브젝트 갱신
    user = cur.execute(
        f"""
        SELECT * from users WHERE id='{id}' 
        """).fetchone()    # fetchone() → 결과 집합에서 첫 번째 행을 반환. 만약 결과가 없으면 None을 반환.
    return user

@app.post('/login')
def login(
        id:Annotated[str, Form()],
        password:Annotated[str, Form()]):
    user = query_user(id)
    if not user:
        raise InvalidCredentialsException
    elif password != user['password']:
        raise InvalidCredentialsException
    access_token = manager.create_access_token(data={
        "name": user['name'],
        "email": user['email'],
        "id": user['id'],
    })
    return {'access_token': access_token}


@app.post('/signup')
def signup(
        id:Annotated[str, Form()],
        name:Annotated[str, Form()],
        email:Annotated[str, Form()],
        password:Annotated[str, Form()]):
    cur.execute(
        f"""
        INSERT INTO users(id, name, email, password)
        VALUES ('{id}', '{name}', '{email}', '{password}');
        """)
    con.commit()
    return '200'



@app.post("/items")
async def create_item(
    image:UploadFile, 
    title:Annotated[str, Form()], 
    price:Annotated[int, Form()],
    description:Annotated[str, Form()],
    place:Annotated[str, Form()],
    insertAt:Annotated[int, Form()]):                
    image_bytes = await image.read()
    cur.execute(
        f"""
        INSERT INTO items (title, image, price, description, place, insertAt) 
        VALUES ('{title}', '{image_bytes.hex()}', {price}, '{description}', '{place}', {insertAt});
        """)
    con.commit()
    return '200'

@app.get("/items")
async def get_items():
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    rows = cur.execute(
        """
        SELECT * FROM items
        """).fetchall()
    return JSONResponse(jsonable_encoder( dict(rows) for rows in rows))


@app.get("/images/{item_id}")
async def get_image(item_id: int):
    cur = con.cursor()
    image_bytes = cur.execute(
        f"""
        SELECT image FROM items WHERE id = {item_id}
        """).fetchone()[0]
    return Response(content=bytes.fromhex(image_bytes), media_type="image/*")


app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")
