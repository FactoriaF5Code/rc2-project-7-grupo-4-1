// ListaDocs.js
import React, { useState } from 'react';
import "./ListadoDocs.css";
import lapiz from "../../assets/lapiz.svg";
import papelera from "../../assets/papelera.svg";
import { useDataContext } from "../../context/DataContext";
import EditModal from '../EditModal/EditModal';
import SearchResultsModal from '../SearchModal/SearchResultsModal';

export default function ListaDocs() {
  const { docs, DeleteDoc, updateDoc } = useDataContext();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  
  // Nuevo estado y funciones para el buscador
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

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

  const handleSearchTermChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filtra los resultados y almacénalos en el estado
    const results = docs.filter((doc) => 
      doc.title.toLowerCase().includes(term) ||
      doc.comments.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  const handleOpenSearchModal = () => {
    setSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setSearchModalOpen(false);
  };

  return (
    <>
      <section className="contenedor__recursos">
        {/* Input de búsqueda */}
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onClick={handleOpenSearchModal}
          onChange={handleSearchTermChange}
        />

        {/* Lista de documentos */}
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

      {/* Modal de edición */}
      {selectedDoc && (
        <EditModal
          isOpen={editModalOpen}
          onClose={handleEditModalClose}
          onSave={handleSaveEdit}
          initialData={selectedDoc}
        />
      )}

      {/* Modal de resultados de búsqueda */}
      <SearchResultsModal
        isOpen={searchModalOpen}
        onClose={handleCloseSearchModal}
        results={searchResults}
      />
    </>
  );
}
