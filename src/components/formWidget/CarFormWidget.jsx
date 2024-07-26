import React, { useState } from 'react'

const CarFormWidget = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        idNumber: '',
        carBrand: '',
        licensePlate: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      };

    const handleButtonClick = (serviceType) => {
        console.log('Selected Service:', serviceType);
    };

  return (
    <div>
    <h2>CarFormWidget</h2>
    <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Número de Identificación:</label>
          <input 
            type="text" 
            name="idNumber" 
            value={formData.idNumber} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Marca del Vehículo:</label>
          <input 
            type="text" 
            name="carBrand" 
            value={formData.carBrand} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Placa del Vehículo:</label>
          <input 
            type="text" 
            name="licensePlate" 
            value={formData.licensePlate} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <button type="button" onClick={() => handleButtonClick('pintura')}>Pintura</button>
          <button type="button" onClick={() => handleButtonClick('mecanica')}>Mecánica</button>
          <button type="button" onClick={() => handleButtonClick('electricidad')}>Electricidad</button>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      <p>Propiedad recibida: {props.someProp}</p>
    </div>
  )
}

export default CarFormWidget