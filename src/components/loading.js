import styled from "styled-components";

function Loading() {
    return (
        <LoadingStyle>
            <i className="fas fa-sync-alt spinner"></i>
        </LoadingStyle>
    );
}

const LoadingStyle = styled.div`
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    .spinner {
        color: gray;
        animation: loading 0.5s ease-out infinite;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(180deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Loading;
