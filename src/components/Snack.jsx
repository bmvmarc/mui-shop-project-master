import { Alert, Snackbar } from "@mui/material";

const Snack = ({isSnackBarOpen, onSnackClose}) => {
    return (
        <Snackbar
            open={isSnackBarOpen}
            autoHideDuration={3000}
            onClose={onSnackClose}>

            <Alert severity="success">
                Item's been added to the basket
            </Alert>

        </Snackbar>
    );
}

export default Snack
