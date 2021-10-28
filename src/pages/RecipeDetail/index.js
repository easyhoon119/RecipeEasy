import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../../components/loading";
import { PageWrap } from "../../components/styled";
import RecipeDetailBody from "./Body";

function RecipeDetailPage() {
    // useLoaction을 이용하여 id 값 받아오기
    const location = useLocation();
    const foodID = location.state.id;
    // 음식 detail 값 받아서 넣기
    const [foodDetailData, setFoodDetailData] = useState();

    useEffect(() => {
        // axios 와 id 값을 이용하여 음식 상세 데이터 받기
        async function fetchData() {
            try {
                const url = `https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe/${foodID}`;

                const res = await axios({
                    method: "get",
                    url: url,
                });
                setFoodDetailData(res.data);
            } catch (error) {
                //error 체크
                console.log(error);
            }
        }
        fetchData();
    }, [foodID]);

    return (
        <PageWrap>
            {foodDetailData ? (
                // 음식 상세 데이터 뿌려주기
                <RecipeDetailBody data={foodDetailData} />
            ) : (
                // 데이터 받기 전 보일 로딩 컴포넌트
                <Loading />
            )}
        </PageWrap>
    );
}

export default RecipeDetailPage;
