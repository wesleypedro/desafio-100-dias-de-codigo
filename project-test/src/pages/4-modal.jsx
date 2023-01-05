import { useState } from 'react';
import '../App.css';
import ModalComponent from '../components/modal';

function Modal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='App'>
            Front Beginners
            <div>
                <button onClick={() => setOpenModal(true)}> Abrir modal </button>
            </div>
            <ModalComponent isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                Conteúdo do Modal
            </ModalComponent>
        </div>
    );
}

export default Modal;