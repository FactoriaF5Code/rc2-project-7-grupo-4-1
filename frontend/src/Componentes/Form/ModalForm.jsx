
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ModalForm = ({ newDocs, setNewDocs, onAdd, onCancel }) => {
  return (
  <div className="flex flex-column px-8 py-5 gap-4">
    <div className="inline-flex flex-column gap-2">
      <label htmlFor="username" className="text-primary-50 font-semibold">
        Titulo
      </label>
      <InputText
        id="username"
        label="title"
        className="bg-white-alpha-20 border-none p-3 text-primary-50"
        value={newDocs.title}
        onChange={(e) =>
          setNewDocs({ ...newDocs, title: e.target.value })
        }
      ></InputText>
    </div>
    
            <div className="inline-flex flex-column gap-2">
              <label
                htmlFor="username"
                className="text-primary-50 font-semibold"
              >
                Url
              </label>
              <InputText
                id="password"
                label="url"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                value={newDocs && newDocs.url}
                onChange={(e) =>
                  setNewDocs({ ...newDocs, url: e.target.value })
                }
              ></InputText>
            </div>
            <div className="inline-flex flex-column gap-2">
              <label
                htmlFor="username"
                className="text-primary-50 font-semibold"
              >
                Comentario
              </label>
              <InputText
                id="username"
                label="Username"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                value={newDocs && newDocs.comments}
                onChange={(e) =>
                  setNewDocs({ ...newDocs, comments: e.target.value })
                }
              ></InputText>
   </div>
    <div className="flex align-items-center gap-2">
      <Button
        label="Añadir"
        onClick={onAdd}
        text
        className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
      ></Button>
      <Button
        label="Cancel"
        onClick={onCancel}
        text
        className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
      ></Button>
    </div>
  </div>
  )
};

export default ModalForm;
