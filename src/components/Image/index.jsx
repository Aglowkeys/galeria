import React, { useState } from 'react';
import Modal from '../Modal';
import { StyledImage } from './styles';

const Image = ({ photo, featured }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <StyledImage onClick={openModal} featured={featured}>
                <img
                    src={photo.download_url}
                    alt={`Foto de ${photo.author}`}
                    width={photo.width}
                    height={photo.height}
                />
            </StyledImage>
            {showModal && <Modal closeModal={closeModal} photo={photo} />}
        </>
    );
};

export default Image;
