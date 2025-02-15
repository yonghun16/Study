from fastapi import FastAPI, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from typing import Annotated
import sqlite3

con = sqlite3.connect('db.db', check_same_thread=False)
cur = con.cursor()

app = FastAPI()

@app.post("/items")
async def create_item(image:UploadFile, 
                title:Annotated[str, Form()], 
                price:Annotated[int, Form()],
                description:Annotated[str, Form()],
                place:Annotated[str, Form()]):
    image_bytes = await image.read()
    cur.execute(f"""""")
    return '200'

app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")
