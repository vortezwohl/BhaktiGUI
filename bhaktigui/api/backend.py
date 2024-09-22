from bhakti.database import DBEngine
from fastapi import FastAPI, Request
from starlette.requests import Request
from bhakti import BhaktiClient
from bhakti.const import UTF_8

from bhaktigui.model.init import Init

app = FastAPI()


def generate_response(state: str, message: str, data: any) -> dict:
    return {
        'state': state,
        'message': message,
        'data': data
    }


def find_engine_by_str(_str: str) -> DBEngine | None:
    for engine in DBEngine:
        if engine.value == _str:
            return engine
    return None


@app.post("/init")
async def init(request: Request, init: Init):
    bhakti_client = BhaktiClient(
        server=init.server,
        port=init.port,
        timeout=init.timeout,
        buffer_size=init.buffer_size,
        eof=init.eof.encode(UTF_8),
        db_engine=find_engine_by_str(init.engine)
    )
    request.session['bhakti-client'] = bhakti_client
    return generate_response(state='success', message='', data=True)

