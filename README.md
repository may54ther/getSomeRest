# getSomeRest
![LOGO](./screenshot/logo.png)   

Vue.js + TMDB API를 이용해서 구현한 영화 소개 및 검색 페이지 [🔗Link](https://may54ther.github.io/getSomeRest/dist/)

<br>

**목차**

> 1. [Skills](#skills)
> 2. [Pages](#pages)
> 3. [Project Setup](#project-setup)
> 4. [Todos](#todos)
> 5. [Preview](#preview)


<br>

## 💻Skills
- HTML, CSS
- Vue.js, Vuex, Router 
- Axios
- [The Movie DB API](https://www.themoviedb.org/)

## 💻Pages
1) 메인
    - 슬라이드: 인기영화
    - Upcoming Movies
    - 장르 별 영화
2) 영화-상세소개
    - 영화 소개
    - Cast: 감독, 배우
    - 관련 영화
3) 영화-검색
    - 검색
    - 검색 결과
    - 페이지 더 불러오기
4) Not Found: 404

## 💻Project Setup
```
"build": "vue-cli-service build",
"serve": "vue-cli-service serve"
"dev": "vue-cli-service serve --open --mode development",
"prod": "vue-cli-service serve --open --mode production" 
```

* Install node modules
```
npm install
```

* Compiles and hot-reloads for development
```
npm run serve

npm install -g serve
serve ./dist
```

* Compiles and minifies for production
```
npm run build
```

* Run your tests
```
npm run test
```

* Lints and fixes files
```
npm run lint
```

## 🚩Todos
1. 메인
    - [x] API 사용하여 데이터 불러오기 
    - [x] Design/CSS 
        - [x] 인기영화 
        - [x] 장르 별 영화 
    - [x] Slider 구현 
        - [x] 인기영화 
2. 영화-상세소개
    - [x] API 사용하여 데이터 불러오기 
    - [x] Design/CSS 
    - [x] 영화 소개 
    - [x] Cast: 감독, 배우 
    - [x] 관련 영화 
3. 영화-검색
    - [x] API 사용하여 데이터 불러오기 
    - [x] 검색 
    - [x] 검색 결과 
    - [x] 페이지 더 불러오기 
4. Not Found: 404
    - [x] Design/CSS 
    - [x] Router 
5. 오류/추가/수정
    - [x] 인기 영화 슬라이더 반응형(크기 변경시 슬라이드 위치ㅠㅠ) 
    - [x] 포스터, 백드롭 사진 null 처리 
    - [ ] scrollTop 버튼을 일정 스크롤 이후부터 나타나도록 변경하기
    - [x] 영화 상세페이지에서 관련 영화를 누르면 주소는 변경되나 페이지 이동이 일어나지 않음 
    - [ ] 인기영화>슬라이더 자동슬라이더로 변경하기
    
## 🔎Preview
#### 메인 페이지  
![img_1](screenshot/img_1.jpg)
#### 영화 소개 페이지  
![img_2](screenshot/img_2.jpg)
#### 영화 검색 페이지  
![img_3](screenshot/img_3.jpg)
#### 404 NOT FOUND  
![img_3](screenshot/img_4.jpg)
