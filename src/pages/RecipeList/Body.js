import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import { BodyStyle } from "../../components/styled";
import ListContainer from "./ListContainer";

function asecding(now, next) {
    // 한글 오름차순
    return now.name < next.name ? -1 : now.name > next.name ? 1 : 0;
}

function RecipeListBody() {
    // 필터된 데이터 삽입
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        // axios를 이용하여 음식 데이터 불러오기
        async function fetchData() {
            try {
                const url = `https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe`;

                const res = await axios({
                    method: "get",
                    url: url,
                });
                //음식 데이터 카테고리로 분류후 오름차순으로 sorting
                const koreanFood = res.data
                    .filter((item) => item.category === "korean")
                    .sort(asecding);
                const japaneseFood = res.data
                    .filter((item) => item.category === "japanese")
                    .sort(asecding);
                // 필터된 데이터 삽입
                setFilteredList([[...koreanFood], [...japaneseFood]]);
            } catch (error) {
                //error 체크
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <BodyStyle>
            {/* 카테고리로 먼저 분류 */}
            {filteredList.length > 0 ? (
                filteredList.map((item, index) => (
                    <ListContainer list={item} key={index} />
                ))
            ) : (
                // 데이터를 불러 올때 까지 보일 로딩 컴포넌트
                <Loading />
            )}
        </BodyStyle>
    );
}

export default RecipeListBody;
