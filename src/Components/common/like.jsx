import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const Like = ({ onClick, liked }) => {
  let icon = liked ? (
    <FontAwesomeIcon onClick={onClick} icon={solid('heart')} />
  ) : (
    <FontAwesomeIcon onClick={onClick} icon={regular('heart')} />
  );
  return icon;
};

export default Like;
