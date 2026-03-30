"""

댜음 내용을 참고하여 이미지를 분류할 수 있는 CNN 모델을 구현하는 python 코드를 작성해줘.

# 데이터 폴더 구조
- cats_dogs
- cats_dogs/cats_set
- cats_dogs/dogs_set

# 동작 설명
1. 이미지를 데이터 증강을 수행한다.
2. 이미지를 분류 할 수 있는 모델을 만들고, 학습 수행한다.
3. 모델은 전이학습을 통해 수행한다.
4. test_dir = data_dir / "test" 여기에 테스트 이미지가 있어, 이전에 학습한 모델을 통해 분류를 수행하는 코드를 만들어줘.

"""

from pathlib import Path

import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.applications import MobileNetV2  # 전이학습을 위한 모델
from tensorflow.keras.preprocessing import image  # 단일 이미지 전처리
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# ---------------------------------------------------------
# 1. 데이터 경로 설정
# ---------------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent.parent
data_dir = BASE_DIR / "data" / "cats_dogs"
test_dir = data_dir / "test"

# ---------------------------------------------------------
# 2. 데이터 증강 및 데이터 로더 설정
# ---------------------------------------------------------
train_datagen = ImageDataGenerator(
    rescale=1.0 / 255,
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode="nearest",
    validation_split=0.2,  # 검증 데이터 20% 분리
)

# 학습 데이터 생성기
train_generator = train_datagen.flow_from_directory(
    str(data_dir),
    target_size=(150, 150),
    batch_size=32,
    class_mode="binary",
    subset="training",
)

# 검증 데이터 생성기
validation_generator = train_datagen.flow_from_directory(
    str(data_dir),
    target_size=(150, 150),
    batch_size=32,
    class_mode="binary",
    subset="validation",
)

# ---------------------------------------------------------
# 3. 전이학습 모델 구성 (MobileNetV2 기반)
# ---------------------------------------------------------
base_model = MobileNetV2(
    input_shape=(150, 150, 3), include_top=False, weights="imagenet"
)

# 미리 학습된 뼈대 모델의 가중치가 변하지 않도록 동결
base_model.trainable = False

# 우리의 목적에 맞는 새로운 분류 층을 뼈대 뒤에 추가
model = models.Sequential(
    [
        base_model,
        layers.GlobalAveragePooling2D(),
        layers.Dropout(0.5),  # 과적합 방지
        layers.Dense(1, activation="sigmoid"),
    ]
)

# ---------------------------------------------------------
# 4. 모델 컴파일
# ---------------------------------------------------------
model.compile(
    loss="binary_crossentropy",
    optimizer=tf.keras.optimizers.RMSprop(learning_rate=1e-4),
    metrics=["accuracy"],
)

# ---------------------------------------------------------
# 5. 모델 학습
# ---------------------------------------------------------
print("--- 모델 학습을 시작합니다 ---")
history = model.fit(
    train_generator,
    steps_per_epoch=25,  # 1 에포크당 25 스텝만 진행
    epochs=10,  # 총 10 에포크 학습
    validation_data=validation_generator,
)

# ---------------------------------------------------------
# 6. 모델 저장
# ---------------------------------------------------------
model.save("cats_and_dogs_transfer_model.keras")
print("전이학습 모델 학습 및 저장이 완료되었습니다.\n")


# ---------------------------------------------------------
# 7. 테스트 이미지 분류 (추론)
# ---------------------------------------------------------
print("--- 테스트 이미지 분류 시작 ---")

# 학습할 때 사용된 클래스 인덱스 확인 (예: {'cats_set': 0, 'dogs_set': 1})
class_indices = train_generator.class_indices
# 인덱스를 다시 클래스 이름으로 바꾸기 위한 딕셔너리 생성 (예: {0: 'cats_set', 1: 'dogs_set'})
labels = {v: k for k, v in class_indices.items()}

# test_dir 폴더 안의 이미지 파일들 검색 (.jpg, .jpeg, .png 확장자 처리)
test_images = (
    list(test_dir.glob("*.jpg"))
    + list(test_dir.glob("*.jpeg"))
    + list(test_dir.glob("*.png"))
)

if not test_images:
    print(
        f"⚠️ '{test_dir}' 경로에 테스트할 이미지가 없습니다. 이미지를 넣어주세요."
    )
else:
    for img_path in test_images:
        # 1) 이미지 불러오기 및 크기 조정 (학습할 때와 동일하게 150x150)
        img = image.load_img(img_path, target_size=(150, 150))

        # 2) 이미지를 Numpy 배열로 변환
        img_array = image.img_to_array(img)

        # 3) 모델은 배치(Batch) 단위로 입력을 받으므로 차원 확장 (150, 150, 3) -> (1, 150, 150, 3)
        img_array = np.expand_dims(img_array, axis=0)

        # 4) 학습 데이터와 동일하게 스케일링 (1.0 / 255)
        img_array /= 255.0

        # 5) 모델 예측
        prediction = model.predict(img_array, verbose=0)

        # 6) 이진 분류 결과 해석 (sigmoid 출력이므로 0.5를 기준으로 판별)
        # NumPy 타입의 예측값을 파이썬 기본 실수(float)로 변환 (포맷팅 에러 해결)
        pred_value = float(prediction.squeeze())

        # 예측값이 0.5보다 크면 1번 클래스, 작으면 0번 클래스
        predicted_class_idx = 1 if pred_value > 0.5 else 0
        predicted_label = labels[predicted_class_idx]

        # 확률 계산 (출력값이 1일 확률이므로, 0번 클래스로 예측된 경우 1에서 빼줌)
        confidence = (
            pred_value if predicted_class_idx == 1 else 1.0 - pred_value
        )

        print(
            f"파일명: {img_path.name}  --->  예측 결과: {predicted_label} (확률: {confidence:.2%})"
        )
