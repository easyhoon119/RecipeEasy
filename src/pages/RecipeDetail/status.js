import styled from "styled-components";

function FoodStatus({ time, serv, kcal }) {
    return (
        <StatusStyle>
            <div className="flexContainer">
                <picture>
                    <source
                        media="(min-width: 700px)"
                        srcSet="./images/time@3x.png"
                    />
                    <source
                        media="(min-width: 400px)"
                        srcSet="./images/time@2x.png"
                    />
                    <img
                        className="subImage"
                        src="./images/time.png"
                        alt="People"
                    />
                </picture>
                <p>{time}분</p>
            </div>
            <div className="flexContainer">
                <picture>
                    <source
                        media="(min-width: 700px)"
                        srcSet="./images/serving@3x.png"
                    />
                    <source
                        media="(min-width: 400px)"
                        srcSet="./images/serving@2x.png"
                    />
                    <img
                        className="subImage"
                        src="./images/serving.png"
                        alt="People"
                    />
                </picture>
                <p>{serv}인분</p>
            </div>
            <div className="flexContainer">
                <picture>
                    <source
                        media="(min-width: 700px)"
                        srcSet="./images/kcal@3x.png"
                    />
                    <source
                        media="(min-width: 400px)"
                        srcSet="./images/kcal@2x.png"
                    />
                    <img
                        className="subImage"
                        src="./images/kcal.png"
                        alt="People"
                    />
                </picture>
                <p>{kcal} kcal</p>
            </div>
        </StatusStyle>
    );
}

const StatusStyle = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 2rem 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-around;

    img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1vw;
    }

    .flexContainer {
        display: flex;
        align-items: center;
    }
`;

export default FoodStatus;
