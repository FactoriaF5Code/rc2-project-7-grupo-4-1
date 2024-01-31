import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import icon from "../../assets/icon-plus.png";

export default function HeadlessDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="card flex justify-content-center ">
      <Button label="Añadir" icon={icon} onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        modal
        onHide={() => setVisible(false)}
        content={({ hide }) => (
          <div
            className="flex flex-column px-8 py-5 gap-4"
            style={{
              borderRadius: "12px",
              backgroundImage:
                "radial-gradient(circle at left top, var(--primary-400), var(--primary-700))",
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
                label="Username"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
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
                label="Password"
                className="bg-white-alpha-20 border-none p-3 text-primary-50"
                type="password"
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
              ></InputText>
            </div>
            <div className="flex align-items-center gap-2">
              <Button
                label="Añadir"
                onClick={(e) => hide(e)}
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
