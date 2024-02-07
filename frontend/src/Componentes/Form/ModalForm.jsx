import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./ModalForm.css";

const ModalForm = ({ newDocs, setNewDocs, onAdd, onCancel }) => {
  return (
    <div
      className="flex flex-column px-8 py-5 gap-4"
      style={{
        borderRadius: "12px",
        backgroundImage:
          "radial-gradient(circle at left top, var(--orange-300), var(--orange-400))",
      }}
    >
      <div className="inline-flex flex-column gap-2">
        <label
          htmlFor="username"
          className="text--gray-900 font-semibold text-2xl"
        >
          Título
        </label>
        <InputText
          id="username"
          label="title"
          className="bg-white-alpha-20 border-none p-3 text-primary-50"
          value={newDocs.title}
          onChange={(e) => setNewDocs({ ...newDocs, title: e.target.value })}
          placeholder="Ejemplo: Box shadow generator"
        ></InputText>
      </div>

      <div className="inline-flex flex-column gap-2">
        <label
          htmlFor="username"
          className="text--gray-900 font-semibold text-2xl"
        >
          Url
        </label>
        <InputText
          id="password"
          label="url"
          className="bg-white-alpha-20 border-none p-3 text-primary-50"
          value={newDocs && newDocs.url}
          onChange={(e) => setNewDocs({ ...newDocs, url: e.target.value })}
          placeholder="https://www.ejemplo.com/"
        ></InputText>
      </div>
      <div className="inline-flex flex-column gap-2">
        <label
          htmlFor="username"
          className="text--gray-900 font-semibold text-2xl"
        >
          Comentario
        </label>
        <InputText
          id="username"
          label="Username"
          className="bg-white-alpha-20 border-none p-3 text-primary-50"
          value={newDocs && newDocs.comments}
          onChange={(e) => setNewDocs({ ...newDocs, comments: e.target.value })}
          placeholder="Ejemplo: Util para hacer app con sombras"
        ></InputText>
      </div>
      <div className="flex align-items-center gap-2">
        <Button
          label="Añadir"
          onClick={onAdd}
          text
          className="p-3 w-full text-gray-900 border-1 border-white-alpha-30 hover:bg-white-alpha-10 text-2xl "
          type="reset"
        ></Button>
        <Button
          label="Cancelar"
          onClick={onCancel}
          text
          className="p-3 w-full text-gray-900 border-1 border-white-alpha-30 hover:bg-white-alpha-10 text-2xl"
        ></Button>
      </div>
    </div>
  );
};

export default ModalForm;
