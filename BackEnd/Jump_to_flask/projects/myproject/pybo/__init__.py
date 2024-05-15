# Flask application factory : create_app() 함수
# SQLAlchemy : ORM 라이브러리
# Flask-Migrate : ORM 라이브러리 기반으로 작성된 스키마를 데이터베이스에 반영

from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
import config


db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    # ORM 라이브러리
    db.init_app(app)
    migrate.init_app(app, db)
    from . import models

    # 블루 프린트
    from .views import main_views, question_views, answer_views
    app.register_blueprint(main_views.bp)
    app.register_blueprint(question_views.bp)
    app.register_blueprint(answer_views.bp)

    return app
