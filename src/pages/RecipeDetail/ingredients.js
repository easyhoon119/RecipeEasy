import styled from "styled-components";

function FoodIngredients({ data, name }) {
    // 체크 박스 토글링 하기
    const goChecking = (e) => {
        e.target.nextSibling.childNodes[2].style.display = "block";
    };
    // 체크 박스 토글링 하기
    const goCheckout = (e) => {
        e.target.style.display = "none";
    };

    return (
        <IngredientsStyle name={name}>
            <p className="name">{name}</p>
            <div className="checkedItem">
                {data.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            width: "34.4rem",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "1rem",
                            position: "relative",
                        }}>
                        {/* input checkbox가 아닌 div로 체크박스 만들기 */}
                        <div className="checkbox" onClick={goChecking}></div>
                        <picture>
                            <source
                                media="(min-width: 700px)"
                                srcSet="./images/check_full@3x.png"
                            />
                            <source
                                media="(min-width: 400px)"
                                srcSet="./images/check_full@2x.png"
                            />
                            <img
                                onClick={goCheckout}
                                className="subImage"
                                src="./images/check_full.png"
                                alt="People"
                            />
                        </picture>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </IngredientsStyle>
    );
}

const IngredientsStyle = styled.div`
    padding-bottom: 3rem;
    box-sizing: border-box;
    ${(props) => (props.name === "재료" ? "margin-top : 3rem" : "")};

    .name {
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    .checkedItem {
        display: flex;
        flex-wrap: wrap;
    }

    .checkbox {
        width: 1.8rem;
        height: 1.8rem;
        border: 2px solid black;
        border-radius: 0.5rem;
        box-sizing: border-box;
        margin-right: 1rem;
        cursor: pointer;
    }

    img {
        width: 1.8rem;
        height: 1.8rem;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
`;

export default FoodIngredients;
