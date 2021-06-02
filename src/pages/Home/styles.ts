import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    display: flex;
    max-width: 100vw;
    width: 100%;
    max-height: 100vh;
    height: 100%;

    .Link.back {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const Wrapper = styled.div`
    max-width: 100vw;
    width: 100%;
    & > div:first-child {
        display: flex;
        flex-direction: row;
        max-height: 88.5vh;
        height: 100%;
    }
`;