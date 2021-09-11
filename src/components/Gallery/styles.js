import styled from 'styled-components';

export const StyledGallery = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: masonry;
    gap: 1em;
`;
