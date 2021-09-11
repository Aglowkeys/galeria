import styled from 'styled-components';

export const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;

    div {
        background-color: #fafafa;
        padding: 1em 2em;
        width: 90%;
        max-width: 1000px;
        position: relative;
        border-radius: 0.5em;

        button {
            position: absolute;
            top: 1em;
            right: 1em;
            width: 2em;
            height: 2em;
            border-radius: 50%;
            border: none;
            background-color: transparent;

            &:hover {
                background-color: #ddd;
            }
        }
    }
`;
