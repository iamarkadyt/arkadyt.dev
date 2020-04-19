import React from 'react';

const Image = props => {
    const { image={}, containerProps, imgProps } = props;
    return (
        <picture {...containerProps}>
          {image.webp && <source type="image/webp" srcset={image.webp} />}
          {image.fallback && <img src={image.fallback} {...imgProps} />}
        </picture>
    );
};

export default Image;