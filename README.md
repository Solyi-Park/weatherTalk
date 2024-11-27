# WeatherTalk 🌦️  

WeatherTalk은 사용자가 선택한 캐릭터가 현재 위치의 날씨 정보를 실시간으로 알려주는 웹 애플리케이션입니다. 
OpenAI API를 사용하여 캐릭터의 자연스러운 대화를 기반으로 날씨 메시지를 생성합니다.
다양한 캐릭터를 선택할 수 있으며, 사용자가 선택한 캐릭터를 브라우저에 저장하여 다음 방문 시에도 동일한 캐릭터가 나타납니다.


## 📝 프로젝트 설명
WeatherTalk은 사용자 경험을 강화하기 위해 **OpenAI API**를 활용하여 대화형 날씨 정보를 제공합니다.  
- **캐릭터와 함께하는 날씨 정보**  
  귀여운 캐릭터를 선택하거나 랜덤으로 변경하며, 현재 위치의 날씨를 실시간으로 확인할 수 있습니다.  
- **간단한 상태 관리**  
  `zustand`를 사용하여 상태를 효율적으로 관리하고, 브라우저에 영속적으로 데이터를 저장합니다.  
- **모든 디바이스에 최적화된 반응형 디자인**  

## 🛠️ 기술 스택
### **프론트엔드**
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) 

### **스타일링**
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)

### **상태 관리**
![Zustand](https://img.shields.io/badge/Zustand-404040?logo=github&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?logo=react-query&logoColor=white)

### **배포**
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white) 


## 🌐 주요 API
### **메시지 생성**
**[OpenAI API](https://platform.openai.com/docs/)**  
  - OpenAI GPT 모델을 활용하여 캐릭터가 대화형 메시지로 날씨 정보를 제공합니다.  

### **날씨 데이터**
**[OpenWeatherMap API](https://openweathermap.org/api)**  
**[Geocoding API](https://openweathermap.org/api/geocoding-api)**  


## 🔗 라이브 데모
- **[WeatherTalk Live Demo](https://weather-talk.vercel.app)**

## 🎥 데모

WeatherTalk의 주요 기능을 시연하는 GIF입니다.

![weather-talk 시연](https://github.com/user-attachments/assets/58345f37-0f80-4b8c-9df7-7f873fc3cd11)

### **랜딩 페이지**
![랜딩 페이지](https://github.com/Solyi-Park/weatherTalk/assets/121113217/bf1118eb-062b-41fd-9641-b678e6f23c63)

### **캐릭터 선택**
![캐릭터 선택](https://github.com/Solyi-Park/weatherTalk/assets/121113217/828522e2-7c91-4476-bca5-4c64c256ede1)

### **날씨 상세 정보**
![날씨 상세 정보](https://github.com/Solyi-Park/weatherTalk/assets/121113217/618527f1-87fb-483e-9a20-ebca398a7942)


## ✨ 주요 기능
1. **실시간 날씨 정보 제공**  
   사용자의 현재 위치를 기반으로 날씨 정보를 제공합니다.  
2. **캐릭터 커스터마이징**  
   다양한 캐릭터를 선택할 수 있으며, 클릭 시 랜덤 변경이 가능합니다.  
3. **상태 관리와 데이터 영속화**  
   `zustand`를 사용해 상태를 관리하고, 브라우저에 데이터를 저장합니다.  
4. **반응형 디자인**  
   모바일과 데스크톱에서 최적화된 UI 제공.  

