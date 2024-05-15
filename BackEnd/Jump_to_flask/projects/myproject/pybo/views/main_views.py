# 블루 프린트 : 플라스크에서 URL과 함수의 매핑을 관리하기 위해 사용하는 도구(클래스)
# url_for('__init__에_등록된_블루프린트_별칭.블루프린트_별칭에_등록된_함수')
# url_for('__init__(/pybo)_다음_디렉토리, 파일명)

from flask import Blueprint, url_for
from werkzeug.utils import redirect


bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('/')
def index():
    return redirect(url_for('question._list'))

