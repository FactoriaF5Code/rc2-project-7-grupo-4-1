// EditModal.js
import { useState, useEffect } from 'react';
import './EditModal.css';

const EditModal = ({ isOpen, onClose, onSave, initialData }) => {
 
  const [editedData, setEditedData] = useState(initialData || {});

  useEffect(() => {
    // Verificar si initialData es válido antes de actualizar editedData
    if (initialData && typeof initialData === 'object') {
      setEditedData(initialData);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <section className='overlay'>
    <div id='editContainer' className={`edit-modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <h2>Edit Document</h2>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={editedData.title || ''}
          onChange={handleInputChange}
        />
        <label>URL:</label>
        <input
          type="text"
          name="url"
          value={editedData.url || ''}
          onChange={handleInputChange}
        />
        <label>Comments:</label>
        <input
          type="text"
          name="comments"
          value={editedData.comments || ''}
          onChange={handleInputChange}
        />
        <div className='container__buton__añadir'>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Exit</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default EditModal;
