import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: overlay;

    background: #121212;

    ::-webkit-scrollbar {
        background: transparent;
        width: 12px;
    } 
    ::-webkit-scrollbar-thumb {
        background: rgba(240,240,240, 0.3)
    }
`;

export const TopContent = styled.div`
    display: flex;
    flex-direction: column;

    background-image: linear-gradient(#287088, #121212);
    padding: 15px 30px 0 30px;
`;

export const TopMain = styled.div`
    margin-top: 0px;
    & > div > h1 {
        color: white;
    }
`;

export const TopCategories = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`;