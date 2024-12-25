import React from 'react';
import PropTypes from 'prop-types';
import ModalImage from 'react-modal-image';

const ImagePopup = ({ images, isOpen, setIsOpen, photoIndex, setPhotoIndex }) => {
  if (!isOpen || images.length === 0) {
    return null;
  }

  return (
    <div>
      <ModalImage
        small={images[photoIndex]}
        large={images[photoIndex]}
        alt={`image-${photoIndex}`}
        onClose={() => setIsOpen(false)}
        hideDownload={true}
        hideZoom={true}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button onClick={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}>
          Previous
        </button>
        <button onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}>
          Next
        </button>
      </div>
    </div>
  );
};

ImagePopup.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  photoIndex: PropTypes.number.isRequired,
  setPhotoIndex: PropTypes.func.isRequired,
};

export default ImagePopup;
