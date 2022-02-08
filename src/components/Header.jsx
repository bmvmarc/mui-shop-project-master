import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

const Header = ({handleCart, orderLength}) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography 
                    variant="h6" 
                    component="span"
                    sx={{flexGrow: 1}}>
                   MUI shop 
                </Typography>
                <IconButton 
                    color="inherit"
                    onClick={handleCart}
                    >
                <Badge
                    color="secondary"
                    badgeContent={orderLength}>
                    <ShoppingBasket/>
                </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header