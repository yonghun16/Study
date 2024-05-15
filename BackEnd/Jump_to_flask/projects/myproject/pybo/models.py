from pybo import db     # pybo(__init__.py)의 db를 불러옴

# 질문 모델 클래스
class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)              # id : 답변 데이터의 고유번호
    subject = db.Column(db.String(200), nullable=False)       # subject : 질문 제목
    content = db.Column(db.Text(), nullable=False)            # content : 질문 내용
    create_date = db.Column(db.DateTime(), nullable=False)    # create_date : 질문 작성일시


# 답변 모델 클래스
class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)                                            # id : 답변 데이터의 고유 번호
    question_id = db.Column(db.Integer, db.ForeignKey('question.id', ondelete='CASCADE'))   # question_id : 질문의 데이터의 고유번호(어떤 질문에 달린 답변인지 알아야 하므로 질문 데이터 번호가 필요함)
    question = db.relationship('Question', backref=db.backref('answer_set'))                # question : 질문에 대한 역참조
    content = db.Column(db.Text(), nullable=False)                                          # content : 답변 내용 
    create_date = db.Column(db.DateTime(), nullable=False)                                  # create_date : 답변 작성일시

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
