import styled from "styled-components";

export const FeedMainContent = styled.div`
    & > div:first-child {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        > h2 {
            color: #fff;

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }

        > span {
            font-weight: bold;
            font-size: 13px;

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 30px;
`;