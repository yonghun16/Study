from flask import Flask

def create_app():                           # Flask app생성 함수 (애플리케이션 펙토리)
    app = Flask(__name__)                   # app 객체 생성 (플라스크 app으로) 

    from .views import main_views           # main_views를 불러옴 (화면을 구성하는 메인뷰 파일)
    app.register_blueprint(main_views.bp)   # main_views를 블루프린트에 등록함.

    return app                              # app 객체 반환

