# WeatherTalk 🌦️  

WeatherTalk은 사용자가 선택한 캐릭터가 현재 위치의 실시간 날씨 정보를 제공하는 웹 애플리케이션입니다.  
다양한 캐릭터를 선택할 수 있으며, 상태를 브라우저에 영속적으로 저장하여 사용자 설정을 유지합니다.  

---

## 📝 프로젝트 설명
WeatherTalk은 사용자 경험에 중점을 둔 날씨 정보 제공 서비스입니다.  
- **캐릭터와 함께하는 날씨 정보**  
  귀여운 캐릭터를 선택하거나 랜덤으로 변경하며, 현재 위치의 날씨를 실시간으로 확인할 수 있습니다.  
- **간단한 상태 관리**  
  `zustand`를 사용하여 상태를 효율적으로 관리하고, 브라우저에 영속적으로 데이터를 저장합니다.  
- **모든 디바이스에 최적화된 반응형 디자인**  

---

## 🛠️ 기술 스택
### **프론트엔드**
- ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white) **React**: 사용자 인터페이스 라이브러리  
- ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white) **Next.js**: 서버 사이드 렌더링과 정적 사이트 생성 지원  
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) **TypeScript**: 타입 안정성을 제공  

### **스타일링**
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white) **TailwindCSS**: 유틸리티 퍼스트 CSS 프레임워크  

### **상태 관리**
- ![Zustand](https://img.shields.io/badge/Zustand-404040?logo=github&logoColor=white) **Zustand**: 경량 상태 관리 라이브러리  
- ![React Query](https://img.shields.io/badge/React_Query-FF4154?logo=react-query&logoColor=white) **React Query**: 서버 상태 관리 및 데이터 동기화  

### **데이터 통신**
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white) **Axios**: HTTP 클라이언트  
- ![SWR](https://img.shields.io/badge/SWR-43853D?logo=github&logoColor=white) **SWR**: 데이터 요청 및 캐싱  

### **이미지 처리**
- ![Sharp](https://img.shields.io/badge/Sharp-000000?logo=sharp&logoColor=white) **Sharp**: 이미지 최적화 및 변환  

### **배포**
- ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white) **Vercel**: 글로벌 배포 플랫폼  

---

## 🌐 주요 API
### **날씨 데이터**
- **[OpenWeatherMap API](https://openweathermap.org/api)**  
  - 현재 날씨 데이터를 제공합니다.  
- **[Geocoding API](https://openweathermap.org/api/geocoding-api)**  
  - 사용자의 위치를 위도와 경도로 변환합니다.  

---

## 🔗 라이브 데모
- **[WeatherTalk Live Demo](https://weatherTalk.vercel.app)**  

---

## 📸 데모 스크린샷
### **랜딩 페이지**
![랜딩 페이지](https://github.com/Solyi-Park/weatherTalk/assets/121113217/bf1118eb-062b-41fd-9641-b678e6f23c63)

### **캐릭터 선택**
![캐릭터 선택](https://github.com/Solyi-Park/weatherTalk/assets/121113217/828522e2-7c91-4476-bca5-4c64c256ede1)

### **날씨 상세 정보**
![날씨 상세 정보](https://github.com/Solyi-Park/weatherTalk/assets/121113217/618527f1-87fb-483e-9a20-ebca398a7942)

---

## ✨ 주요 기능
1. **실시간 날씨 정보 제공**  
   사용자의 현재 위치를 기반으로 날씨 정보를 제공합니다.  
2. **캐릭터 커스터마이징**  
   다양한 캐릭터를 선택할 수 있으며, 클릭 시 랜덤 변경이 가능합니다.  
3. **상태 관리와 데이터 영속화**  
   `zustand`를 사용해 상태를 관리하고, 브라우저에 데이터를 저장합니다.  
4. **반응형 디자인**  
   모바일과 데스크톱에서 최적화된 UI 제공.  

---

## 🚀 실행 방법
1. **프로젝트 클론**
   ```bash
   git clone https://github.com/Solyi-Park/weatherTalk.git
   cd weatherTalk
