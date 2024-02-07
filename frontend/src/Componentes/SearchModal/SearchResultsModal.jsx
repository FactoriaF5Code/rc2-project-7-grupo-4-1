// SearchResultsModal.jsx
import "./SearchResultsModal.css";

const SearchResultsModal = ({ isOpen, onClose, results }) => {
  return (
    <div className={`search-results-modal ${isOpen ? "open" : "closed"}`}>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {/* Renderiza cada resultado como desees */}
            <strong>Título:</strong> {result.title}
            <strong>URL:</strong> {result.url}
            <strong>Comentarios:</strong> {result.comments}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default SearchResultsModal;
