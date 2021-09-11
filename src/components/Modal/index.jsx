import React, { useEffect, useRef } from 'react';
import { StyledOverlay } from './styles';

const Modal = ({ closeModal, photo }) => {
    const overlay = useRef(null);

    const closeClick = (ev) => {
        if (ev.target === overlay.current) {
            closeModal();
        }
    };

    const closeEscape = (ev) => {
        if (ev.code === 'Escape') {
            closeModal();
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', closeClick);
        document.body.addEventListener('keydown', closeEscape);

        return () => {
            document.body.removeEventListener('click', closeClick);
            document.body.removeEventListener('keydown', closeEscape);
        };
    }, []);

    return (
        <StyledOverlay ref={overlay}>
            <div>
                <h2>Foto de {photo.author}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad iure nam
                    itaque iusto! Corrupti consequuntur incidunt facilis natus expedita tempora ad
                    voluptas doloremque voluptatibus, reprehenderit ut aspernatur quisquam dolore!
                </p>
                <a href={photo.download_url}>Descargar la imagen</a>
                <button onClick={closeModal}>X</button>
            </div>
        </StyledOverlay>
    );
};

export default Modal;
