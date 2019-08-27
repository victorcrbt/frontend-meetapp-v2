import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import { FaFileImage } from 'react-icons/fa';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput({ styles, name, disabled, ...rest }) {
  const { registerField, defaultValue } = useField('banner');

  const [preview, setPreview] = useState();
  const [file, setFile] = useState();

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref]); // eslint-disable-line

  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue.url);
      setFile(defaultValue.id)
    }
  }, [defaultValue]);

  async function handleImageChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data);

    const { id, url } = response.data;

    setPreview(url);
    setFile(id);
  }

  return (
    <Container styles={styles} disabled={disabled}>
      <label htmlFor="banner">
        <div>
          {preview ? (
            <img src={preview} alt="Meetup banner" />
          ) : (
            <FaFileImage size={30} color="#eee" />
          )}
        </div>

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          ref={ref}
          onChange={handleImageChange}
          name={name}
          disabled={disabled}
        />
      </label>
    </Container>
  );
}
