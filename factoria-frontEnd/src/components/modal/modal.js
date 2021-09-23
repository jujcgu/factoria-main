import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function ModalStatus(props){
    const [relleno, setRelleno] = useState(null);
}
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpenAgregar = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
                <Modal aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    >
                    <Fade in={open}>
                        <h2>hola</h2>
                    </Fade>
                </Modal>
    );
}