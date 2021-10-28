import styled from "styled-components";

function FoodDescription({ name, desc }) {
    return (
        <DescriptionStyle>
            <p className="name">{name}</p>
            <p className="desc">{desc}</p>
        </DescriptionStyle>
    );
}

const DescriptionStyle = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 1.8rem 0;
    box-sizing: border-box;

    .name {
        font-size: 2.4rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .desc {
        font-size: 1.4rem;
        color: gray;
        line-height: 2rem;
    }
`;

export default FoodDescription;
