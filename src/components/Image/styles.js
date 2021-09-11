import styled from 'styled-components';

export const StyledImage = styled.div`
    border-radius: 0.5em;
    background-color: #553860;
    transition: background-color 200ms;
    grid-column: ${(props) => (props.featured ? 'span 2' : '')};

    &:hover {
        background-color: transparent;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
        mix-blend-mode: lighten;
    }
`;
