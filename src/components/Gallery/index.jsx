import React from 'react';
import Image from '../Image';
import { StyledGallery } from './styles';

const Gallery = ({ photos }) => {
    return (
        <StyledGallery>
            {photos.map((photo, i) => (
                <Image photo={photo} featured={i % 11 === 0 ? true : false} />
            ))}
        </StyledGallery>
    );
};

export default Gallery;
