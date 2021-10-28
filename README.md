# footsketch 과제

## 프로젝트 구성

-   프로젝트 생성(CRA)
-   템플릿 구조 설정
-   각종 패키지 설치(styled-components, react-router-dom, axios 등)

## Step 1

-   RecipeListPage 생성
-   컴포넌트 구성 : RecipeListPage(index,js), RecipeListBody(Body.js), ListContainer(ListContainer.js), ItemList(itemList.js), Header(header.js), Loading(loading.js)
-   헤더 구현(추후 재사용을 위해 components 디렉토리에 저장)
-   바디 구현을 위한 itemList 컴포넌트 제작(map 함수를 이용하여 컴포넌트 재사용)
-   axios를 이용하여 음식 데이터 불러오기
-   Picture 태그 공부하기
-   데이터를 불러오는 동안 보일 로딩 컴포넌트 제작

## Step 2

-   RecipeDeatilPage 생성
-   컴포넌트 구성 : RecipeDetailPage(index.js), RecipeDetailBody(Body.js), FoodDescription(description.js), FoodStatus(status.js), FoodIngredients(ingredients.js), FoodMaking(making.js), Loading(loading.js)
-   음식 메인 이미지 삽입(화면 비율에 맞게 : object-fit 사용)
-   음식 설명 및 음식 정보 구현
-   재료 화면(div를 이용해 체크박스 구현, flex-wrap을 이용한 반응형 작업, 컴포넌트 재사용)
-   id 값을 useLocation을 이용해 불러와 axios를 이용해 음식 상세 데이터 불러오기
-   뒤로가기 버튼 클릭시 루트 페이지로 이동

## Step 3

-   카테고리로 필터링 하기
-   filter 함수를 이용하여 korean, japanese 배열 생성
-   spread 문법을 사용하여 filteredList 데이터 생성(map 함수 사용을 위해 - 컴포넌트 재사용 및 데이터 추가 용이성 고려)
-   view 데이터가 없어서 임의의 배열 생성 후 random()을 이용하여 무작위 값 사용
-   카테고리로 나눈 데이터를 sort()와 ascending()을 이용하여 오름차순 정렬
-   반응형 작업(rem, vw, %, media-query)
