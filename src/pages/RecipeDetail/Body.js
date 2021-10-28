import { useHistory } from "react-router";
import { BodyStyle, DetailInner } from "../../components/styled";
import FoodDescription from "./description";
import FoodIngredients from "./ingredients";
import FoodMaking from "./making";
import FoodStatus from "./status";

function RecipeDetailBody({ data }) {
    const history = useHistory();

    // 뒤로가기 버튼 클릭시 루트페이지로 돌아가기
    const goBack = () => {
        history.push("/");
    };

    return (
        <BodyStyle>
            {/* 음식 사진 display */}
            <img
                style={{ width: "100%", height: "32rem", objectFit: "fill" }}
                src={data.picture}
                alt="detailImage"
            />
            <DetailInner>
                <picture>
                    <source
                        media="(min-width: 700px)"
                        srcSet="./images/back@3x.png"
                    />
                    <source
                        media="(min-width: 400px)"
                        srcSet="./images/back@2x.png"
                    />
                    <img
                        style={{
                            // 뒤로가기 버튼 위치 잡기
                            position: "relative",
                            top: "-30rem",
                            left: "0",
                            width: "3rem",
                            height: "3rem",
                            cursor: "pointer",
                        }}
                        onClick={goBack}
                        src="./images/back.png"
                        alt="People"
                    />
                </picture>
                {/* 음식 설명 */}
                <FoodDescription name={data.name} desc={data.description} />
                {/* 음식 조리시간, 인분, 칼로리 정보 */}
                <FoodStatus
                    time={data.cookingTime}
                    serv={data.servings}
                    kcal={data.kcal}
                />
                {/* 음식 재료 및 양념장 */}
                <FoodIngredients data={data.ingredients} name="재료" />
                <FoodIngredients data={data.spices} name="양념장" />
                {/* 음식 요리법 */}
                <FoodMaking data={data.cookingSteps} />
            </DetailInner>
        </BodyStyle>
    );
}

export default RecipeDetailBody;
