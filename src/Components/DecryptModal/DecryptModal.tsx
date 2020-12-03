import { observer } from "mobx-react-lite";
import { useContext } from "react"
import { Modal } from "react-bootstrap"
import { rootStoreContext } from "../../Stores/rootStore"
import './decrypt.scss'
import DecryptForm from "./DecryptForm";

const DecryptModal = () => {

    const rootStore = useContext(rootStoreContext);
    const { showDecryptModal, setShowDecryptModal } = rootStore.viewStore;

    return (
        <Modal 
            centered
            size="xl"
            show={showDecryptModal} 
            onHide={() => {setShowDecryptModal(false)}} >

                <DecryptForm />


        </Modal>
    )
}

export default observer(DecryptModal);