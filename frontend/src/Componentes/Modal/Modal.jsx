import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { useDataContext } from '../../context/DataContext'; 
import ModalButton from '../ButtonAdd/ModalButton';
import ModalForm from '../Form/ModalForm';
import 'primeicons/primeicons.css';
import './Modal.css';

export default function Modal() {
  const { postDoc } = useDataContext();
  const [newDocs, setNewDocs] = useState({ title: '', url: '', comments: '' });
  const [visible, setVisible] = useState(false);

  const handleAddPost = () => {
    postDoc(newDocs, 'http://localhost:9000/docs'); 
    setNewDocs({title: "", url: "", comments: ""})
  };

  return (
    <div className="card flex justify-content-center">
      <ModalButton onClick={() => setVisible(true)} />
      <Dialog
        className="dialog__size"
        visible={visible}
        modal
        onHide={() => setVisible(false)}
        content={({ hide }) => (
          <ModalForm
            newDocs={newDocs}
            setNewDocs={setNewDocs}
            onAdd={(e) => {
              hide(e);
              handleAddPost();
            }}
            onCancel={hide}
          />
        )}
      ></Dialog>
    </div>
  );
}

