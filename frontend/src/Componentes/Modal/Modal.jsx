import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useState, useContext } from "react";
import { BackendCallContext } from "../../Context/BackendCallContext";
import "primeicons/primeicons.css";
import "./Modal.css";

export default function Modal() {
  const { newDocs, setNewDocs, postdoc } = useContext(BackendCallContext);
  const [visible, setVisible] = useState(false);
  return (
    <div className="card flex justify-content-center ">
      <Button
        className="button__modal"
        label="Añadir"
        icon="pi pi-plus-circle"
        onClick={() => setVisible(true)}
      />
      <Dialog
        className="dialog__size"
        visible={visible}
        modal
        onHide={() => setVisible(false)}
        content={({ hide }) => (
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
                className="text-primary-50 font-semibold"
              >
                Titulo
              </label>
              <InputText
                id="username"
                label="title"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                value={newDocs && newDocs.title}
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
                onClick={(e) => {
                  postdoc(e);
                  hide(e);
                }}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
              <Button
                label="Cancel"
                onClick={(e) => hide(e)}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
            </div>
          </div>
        )}
      ></Dialog>
    </div>
  );
}
