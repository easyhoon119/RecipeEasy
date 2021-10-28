import styled from "styled-components";

function Header() {
    return (
        <HeaderStyled>
            <p>맛있는 요리</p>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.div`
    width: 100%;
    height: 13.5rem;
    font-size: 2.5rem;
    font-weight: 600;
    background-color: #ffd133;
    box-sizing: border-box;
    padding-top: 10rem;

    p {
        width: 100%;
        padding: 0 1.8rem;
        box-sizing: border-box;
    }
`;

export default Header;
