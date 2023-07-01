import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import React, { useState } from "react";
import CoffeeIcon from "@mui/icons-material/Coffee";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MmsIcon from '@mui/icons-material/Mms';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "30px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

function Navbar({ drawer, setDrawer,swipe,setSwipe }) {
    const [open, setOpen] = useState(false);

    return (
        <AppBar
            position="sticky"
            sx={{
                right: "-20px",
            }}
        >
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    CUP OF TEA
                </Typography>
                <CoffeeIcon
                    sx={{ display: { xs: "block", sm: "none" } }}
                    onClick={(e) => setDrawer(!drawer)}
                />
                <Search>
                    <InputBase placeholder="Search..."></InputBase>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar
                        sx={{ bgcolor: "orange" }}
                        onClick={(e) => setOpen(true)}
                    >
                        S
                    </Avatar>
                </Icons>
                <UserBox>
                    <Typography variant="span" style={{marginRight:5}} onClick={e => setSwipe(!swipe)}><MmsIcon /></Typography>
                    <Avatar
                        sx={{ bgcolor: "orange" }}
                        onClick={(e) => setOpen(true)}
                    >
                        S
                    </Avatar>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="basic-menu"
                open={open}
                onClose={(e) => setOpen(false)}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;
