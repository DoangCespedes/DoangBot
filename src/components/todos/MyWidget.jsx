// src/components/MyWidget.js

import React from 'react';

const MyWidget = (props) => {
  return (
    <div>
      <h2>Mi Widget Personalizado</h2>
      <p>Esta es una respuesta del widget personalizado.</p>
      <p>Propiedad recibida: {props.someProp}</p>
    </div>
  );
};

export default MyWidget;
