from pydantic import BaseModel


class Init(BaseModel):
    server: str
    port: int
    timeout: float
    buffer_size: int
    eof: str
    engine: str
