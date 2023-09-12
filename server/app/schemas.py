from pydantic import BaseModel

class TuotiaoParams(BaseModel):
    page: int=0
    size: int = 30
    term: str=None
    