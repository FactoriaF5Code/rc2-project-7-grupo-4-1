// ListaDocs.js
import React, { useState } from 'react';
import "./ListadoDocs.css";
import lapiz from "../../assets/lapiz.svg";
import { useDataContext } from "../../context/DataContext";
import papelera from "../../assets/papelera.svg";
import EditModal from '../EditModal/EditModal';

export default function ListaDocs() {
  const { docs, DeleteDoc, updateDoc } = useDataContext();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const handleEditClick = (doc) => {
    setSelectedDoc(doc);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setSelectedDoc(null);
    setEditModalOpen(false);
  };

  const handleSaveEdit = (editedData) => {
    updateDoc(selectedDoc.id, editedData);
    setEditModalOpen(false);
  };

  return (
    <>
      <section className="contenedor__recursos">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="contenedor__recursos__item"
            aria-placeholder="hola"
          >

            <div>
        <strong>Título:</strong> {doc.title}
      </div>
      <div>
        <strong>URL:</strong> {doc.url}
      </div>
      <div>
        <strong>Comentarios:</strong> {doc.comments}
      </div>
            
            <div className="contenedor__iconos">
              <img
                className="papelera"
                src={papelera}
                alt="logo_borrar"
                onClick={() => DeleteDoc(doc.id)}
              />
              <img
                className="lapiz"
                src={lapiz}
                alt="logo_editar"
                onClick={() => handleEditClick(doc)}
              />
            </div>
          </div>
        ))}
      </section>
      
      {selectedDoc && (
        <EditModal
          isOpen={editModalOpen}
          onClose={handleEditModalClose}
          onSave={handleSaveEdit}
          initialData={selectedDoc}
        />
      )}
    </>
  );
}
