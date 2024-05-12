from flask import Blueprint

bp = Blueprint('main', __name__, url_prefix='/')    # url경로를 컨트롤하는 blueprint 객체 생성

@bp.route('/hello')         # bp객체의 route(url경로)에  /hello에 
def hello_pybo():           # 실행할 hello_pybo 함수를 추가
    return 'Hello, Pybo!'

@bp.route('/')
def index():
    return 'Pybo index!'
