from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Login(BaseModel):
    email: str
    password: str

@app.post("/login")
def login(loginData: Login):
    print(f"the login data from server is: {loginData}")
    return "the login hit successfully"