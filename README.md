
## WeatherTalk 프로젝트 소개

WeatherTalk은 사용자가 선택한 캐릭터가 현재 위치의 날씨 정보를 실시간으로 알려주는 웹 애플리케이션입니다. 캐릭터는 사용자가 방문할 때마다 랜덤으로 변경될 수 있으며, 사용자가 선택한 캐릭터를 로컬 스토리지에 저장하여 다음 방문 시에도 동일한 캐릭터가 나타납니다.

## 기능
- **실시간 날씨 정보 제공**: 사용자의 현재 위치를 기반으로 날씨 정보를 제공합니다.
- **캐릭터 선택 기능**: 다양한 캐릭터 중에서 선택할 수 있으며, 선택한 캐릭터는 로컬 스토리지에 저장됩니다.
- **랜덤 캐릭터 기능**: 캐스터 아바타 클릭시 랜덤으로 캐릭터가 변경되어 날씨 정보를 제공합니다.
- **날씨 상세 정보 제공**: 메세지 창을 클릭시 현재 날씨의 상세 정보를 제공합니다.
- **반응형 디자인**: 다양한 기기에서 최적화된 UI를 제공합니다.
<img width="429" alt="스크린샷 2024-07-03 오후 7 03 00" src="https://github.com/Solyi-Park/weatherTalk/assets/121113217/618527f1-87fb-483e-9a20-ebca398a7942">
<img width="443" alt="스크린샷 2024-07-03 오후 7 02 39" src="https://github.com/Solyi-Park/weatherTalk/assets/121113217/1477b35e-970b-430c-acc8-b3bd829e82e2">
<img width="443" alt="스크린샷 2024-07-03 오후 7 02 54" src="https://github.com/Solyi-Park/weatherTalk/assets/121113217/bf1118eb-062b-41fd-9641-b678e6f23c63">
<img width="426" alt="스크린샷 2024-07-03 오후 7 03 31" src="https://github.com/Solyi-Park/weatherTalk/assets/121113217/828522e2-7c91-4476-bca5-4c64c256ede1">



## 기술 스택

- **프론트엔드**: Next.js, TypeScript, TailwindCSS
- **날씨 API**: OpenWeatherMap API
- **역 지오코딩 API**: OpenWeatherMap Geocoding API
- **로컬 스토리지**: 브라우저 내장 기능
- **배포 플랫폼**: Vercel

## API 명세

### GET /api/weather

- **설명**: 현재 위치를 기반으로 날씨 정보를 가져옵니다.
- **요청 매개변수**:
  - `lat` (number): 위도
  - `lon` (number): 경도
- **응답**:
  - `200 OK`: 날씨 정보 객체
  - `400 Bad Request`: 잘못된 요청

### GET /api/citymane

- **설명**: 위도와 경도를 입력으로 받아 위치 이름(도시명)을 가져옵니다.
- **요청 매개변수**:
  - `lat` (number): 위도
  - `lon` (number): 경도
- **응답**:
  - `200 OK`: 위치 정보 객체
  - `400 Bad Request`: 잘못된 요청

### POST /api/generate-weather-message

- **설명**: 사용자가 선택한 캐릭터와 날씨 데이터를 기반으로 OpenAI를 사용하여 날씨 메시지를 생성합니다.

- **요청 본문**:
  - `caster` (string): 캐릭터 이름 (예: "이장님", "할머니", "엄마", "여자캐스터", "남자캐스터", "KPOP매니아", "먹방유튜버", "패션인플루언서1", "패션인플루언서2")
  - `weather` (object): 날씨 데이터 객체
    - `description` (string): 날씨 설명
    - `temp` (number): 현재 기온
    - `temp_max` (number): 최고 기온
    - `temp_min` (number): 최저 기온
    - `precipitation` (number | null): 강수량
    - `wind` (number): 바람 속도
    - `snow` (number | null): 적설량
    - `humidity` (number): 습도
    - `sunrise` (number): 일출 시간
    - `sunset` (number): 일몰 시간
    - `icon` (string): 날씨 아이콘

- **응답**:
  - **성공** (`200 OK`):
    - `message` (string): 캐릭터가 생성한 날씨 메시지
  - **오류**:
    - `400 Bad Request`: 요청 본문이 잘못된 경우
    - `500 Internal Server Error`: 서버 오류가 발생한 경우

- **헤더**:
  - `Content-Type: application/json`

- **요청 예시**:

  ```json
  {
    "caster": "이장님",
    "weather": {
      "description": "맑음",
      "temp": 23,
      "temp_max": 25,
      "temp_min": 20,
      "precipitation": null,
      "wind": 3,
      "snow": null,
      "humidity": 60,
      "sunrise": 1628913600,
      "sunset": 1628960400,
      "icon": "01d"
    }
  }

