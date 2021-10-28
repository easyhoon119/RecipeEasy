import styled from "styled-components";

function FoodMaking({ data }) {
    return (
        <MakingStyle>
            <p className="name">만들어 봅시다!</p>
            {data.map((item, index) => (
                <div key={index} style={{ marginBottom: "1.8rem" }}>
                    {/* 요리법 번호 스타일링 */}
                    <div className="makingNumber">{index + 1}</div>
                    <p style={{ lineHeight: "1.8rem" }}>{item}</p>
                </div>
            ))}
        </MakingStyle>
    );
}

const MakingStyle = styled.div`
    padding-bottom: 2.8rem;
    box-sizing: border-box;

    .name {
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 2.8rem;
    }

    .makingNumber {
        width: 2.2rem;
        height: 2.2rem;
        background-color: #ffd133;
        border-radius: 0.5rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.5rem;
    }
`;

export default FoodMaking;
