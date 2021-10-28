import { useHistory } from "react-router";
import styled from "styled-components";

function ItemList({ list, view }) {
    const history = useHistory();

    // 아이템(요리) 클릭시 상세페이지로 이동 및 id 값 전달
    const goDeail = () => {
        history.push({
            pathname: "/detail",
            state: { id: list.id },
        });
    };

    return (
        <ItemListStyle onClick={goDeail}>
            <img className="mainImage" src={list.picture} alt="음식사진" />
            <div className="listInfo">
                <p>{list.name}</p>
                <div style={{ display: "flex" }}>
                    <div className="flexContainer">
                        <picture>
                            <source
                                media="(min-width: 700px)"
                                srcSet="./images/time_gray@3x.png"
                            />
                            <source
                                media="(min-width: 400px)"
                                srcSet="./images/time_gray@2x.png"
                            />
                            <img
                                className="subImage"
                                src="./images/time_gray.png"
                                alt="People"
                            />
                        </picture>
                        <p>{list.cookingTime}</p>
                    </div>
                    <div className="flexContainer">
                        <picture>
                            <source
                                media="(min-width: 700px)"
                                srcSet="./images/eye@3x.png"
                            />
                            <source
                                media="(min-width: 400px)"
                                srcSet="./images/eye@2x.png"
                            />
                            <img
                                className="subImage"
                                src="./images/eye.png"
                                alt="People"
                            />
                        </picture>
                        {/* 천 단위로 반점 찍기 */}
                        <p>{view.toLocaleString("ko-KR")}</p>
                    </div>
                </div>
            </div>
        </ItemListStyle>
    );
}

const ItemListStyle = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid lightgray;
    display: flex;
    box-sizing: border-box;

    &:hover {
        background-color: whitesmoke;
        cursor: pointer;
    }

    img.mainImage {
        width: 13rem;
        height: 8rem;
        border-radius: 0.5rem;
    }

    .listInfo {
        padding: 0 2rem;
    }

    .listInfo > p {
        font-size: 1.7rem;
        font-weight: 600;
        padding: 1.8rem 0 2rem 0;
    }

    img.subImage {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 0.5rem;
        margin-right: 0.5rem;
    }

    .flexContainer {
        display: flex;
        align-items: center;
        margin-right: 2rem;
        color: gray;
    }
`;

export default ItemList;
