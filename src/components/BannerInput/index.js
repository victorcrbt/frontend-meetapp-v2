import React, { useState } from 'react';
import { FaFileImage } from 'react-icons/fa';

import { Container } from './styles';

export default function BannerInput({ styles, name, ...rest }) {
  const [preview, setPreview] = useState();

  return (
    <Container styles={styles}>
      <label htmlFor="banner">
        <div>
          {preview ? (
            <img src={preview} alt="Meetup banner" />
          ) : (
            <FaFileImage size={30} color="#eee" />
          )}
        </div>

        <input type="file" id="banner" />
      </label>
    </Container>
  );
}
