/*

classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.
 - LocalStorage API 
 - Geolocation API

1. LocalStorage API:
 - Use abstract classes and generics.
 - 추상화 클래스와 제네릭을 사용하세요.
  localStorage.setItem(<key>, <value>)
  localStorage.getItem(<key>)
  localStorage.clearItem(<key>)
  localStorage.clear()
( Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Storage )

2. Geolocation API:
 - overloading을 사용하세요.
  geolocation.getCurrentPosition(successFn);
  geolocation.getCurrentPosition(successFn, errorFn);
  geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
  geolocation.watchPosition(success);
  geolocation.watchPosition(success, error);
  geolocation.watchPosition(success, error, options);
  geolocation.clearWatch(id);
( Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation )

*/


/*------------------------------------
       1. LocalStorage API:
------------------------------------*/
interface StorageType<T> {
  [key: string]: T
}

abstract class LocalStorageAPI<T> {
  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class LocalStorage<T> extends LocalStorageAPI<T> {
  private storage: StorageType<T> = {}

  setItem(key: string, value: T) {
    this.storage[key] = value;
  }

  getItem(key: string): T {
    return this.storage[key];
  }

  clearItem(key: string) {
    delete this.storage[key];
  }

  clear(): void {
    this.storage = {};
  }
}

// 로컬스토리지 객체 생성
const stingsStorage = new LocalStorage<string>()

// 호출 예시
stingsStorage.setItem("nico", "good teacher")
console.log(stingsStorage.getItem("nico"))
console.log()




/*------------------------------------
        2. Geolocation API:
------------------------------------*/
// types
type geolocationPosition = {
  coords: {
    latitude: number,           // 위도
    longitude: number           // 경도
  };
};

type geolocationPositionError = {
  errorCode: string,            // 에러 코드
  message: string               // 에러 메시지
};

type geolocationPositionOption = {
  enableHighAccracy: boolean,   // false
  timeout: number,              // Number.NEGATIVE_INFINITY,
  maximumAge: number            // 0
};

type WatchId = {
  watchId: string
}


// geolocation interface (overloading 사용)
interface geolocationAPI {
  getCurrentPosition: {
    (sucessFn: geolocationPosition): void
    (sucessFn: geolocationPosition, errorFn: geolocationPositionError): void
    (sucessFn: geolocationPosition, errorFn: geolocationPositionError, optionsObj: geolocationPositionOption): void
  }
  watchPosition: {
    (sucess: geolocationPosition): void
    (sucess: geolocationPosition, error: geolocationPositionError): void
    (sucess: geolocationPosition, error: geolocationPositionError, options: geolocationPositionOption): void
  }
}

// geolocation 클래스
class GeolocationClass implements geolocationAPI {
  getCurrentPosition(
    successFn: geolocationPosition,
    errorFn?: geolocationPositionError | null,
    optionsObj?: geolocationPositionOption
  ) {
    if (errorFn) console.log("에러 메시지:", errorFn.message);
    else {
      if (optionsObj) console.log(optionsObj)
      console.log("위도:", successFn.coords.latitude);
      console.log("경도:", successFn.coords.longitude);
    }
  }
  watchPosition(
    success: geolocationPosition,
    error?: geolocationPositionError | null,
    options?: geolocationPositionOption
  ) {
    if (error) console.log("watch error:", error.message);
    else {
      if (options) console.log(options);
      console.log("watch 위도:", success.coords.latitude);
      console.log("watch 경도:", success.coords.longitude);
    }
  }
  clearWatch(
    watchId: WatchId
  ) {
    console.log(watchId);
  }
}

// 테스트용 가짜 Object 생성
const position: geolocationPosition = {
  coords: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
};

const error: geolocationPositionError = {
  errorCode: "E8",
  message: "위치 정보를 가져올 수 없습니다"
}

const option: geolocationPositionOption = {
  enableHighAccracy: false,
  timeout: Number.POSITIVE_INFINITY,
  maximumAge: 0
}

const id: WatchId = {
  watchId : "yonghun16"
}

// geolocation 객체 생성
const geolocation = new GeolocationClass()


// 호출 예시
geolocation.getCurrentPosition(position)
geolocation.getCurrentPosition(position, error)
geolocation.getCurrentPosition(position, undefined, option)
console.log()
geolocation.watchPosition(position);
geolocation.watchPosition(position, error);
geolocation.watchPosition(position, error, option);
geolocation.clearWatch(id);
