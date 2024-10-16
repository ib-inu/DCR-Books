/* eslint-disable react/prop-types */
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useBooksContext } from '../context/BooksContext';
import { Toaster } from 'react-hot-toast';


function ModalRemove({ onConfirm, text, btn1Color, btn2Color }) {

    const { setRemoveModalOpen, removeModalOpen } = useBooksContext();


    const handleCancelClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setRemoveModalOpen(false);
    };


    return (
        <>
            <Toaster />
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={removeModalOpen}
                onClose={() => setRemoveModalOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outline"
                    sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg', bgcolor: "rgb(42, 25, 43)", color: "#d8cef0" }}
                >
                    <ModalClose variant="plain" sx={{ m: -1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        sx={{ fontWeight: 'lg', mb: 1 }}
                    >
                        {text}
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">

                        <Button
                            color={btn1Color}
                            sx={{ m: 2, mb: 0 }} onClick={handleCancelClick} >Cancel</Button>
                        <Button
                            color={btn2Color}
                            disabled={false}
                            loading={false}
                            onClick={onConfirm}
                            variant="solid"
                        >Confirm</Button>
                    </Typography>
                </Sheet>
            </Modal >
        </>
    )
}

export default ModalRemove
