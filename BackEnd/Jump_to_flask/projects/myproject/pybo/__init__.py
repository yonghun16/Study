from flask import Flask
from flask_migrate import Migrate          # flask의 python모델을 이용해 테이블 생성, 컬럼 추가 할 수 있게 하는 기능을 가진 라이브러리 
from flask_sqlalchemy import SQLAlchemy    # flask의 ORM 라이브러리

import config

db = SQLAlchemy()
migrate = Migrate()

def create_app():                               # Flask app생성 함수 (애플리케이션 펙토리)
    app = Flask(__name__)                       # app 객체 생성 (플라스크 app으로) 
    app.config.from_object(config)              # config.py를 불러옴

    # ORM
    db.init_app(app)                            # ORM객체 초기화 및 등록
    migrate.init_app(app, db)                   # migrate객체 초기화 및 등록
    from . import models

    # 블루프린트
    from .views import main_views, question_views, answer_views, auth_views        # main_views, question_views를 불러옴 (화면을 구성하는 메인뷰 파일)
    app.register_blueprint(main_views.bp)                # main_views에 작성한 블루프린트를 등록함.
    app.register_blueprint(question_views.bp)            # question_views에 작성한 블루프린트를 등록함.
    app.register_blueprint(answer_views.bp)              # answer_views에 작성한 블루프린트를 등록함.
    app.register_blueprint(auth_views.bp)                # auth_views에 작성한 블루프린트를 등록함.

    # 필터
    from .filter import format_datetime
    app.jinja_env.filters['datetime'] = format_datetime  # 날짜 포멧 필터

    return app                                           # app 객체 반환

