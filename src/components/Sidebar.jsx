import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import ArchiveIcon from '@mui/icons-material/Archive';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

function Sidebar({ mode, setMode, drawer, setDrawer }) {
    return (
        <Box
            sx={{
                display: { xs: "", sm: "block" },
                flex: { xm: 0, sm: 0, md: 1, xl: 1 },
                padding: { xm: 0, sm: 0, md: 2, xl: 2 },
            }}
        >
            {/* <Box sx={{position:'fixed'}}> */}
            <Drawer
                anchor="left"
                open={drawer}
                hideBackdrop={true}
                ModalProps={{
                    keepMounted: true,
                }}
                variant="persistent"
                sx={{
                    "& .MuiDrawer-paper": {
                        marginTop: { xs: "56px", sm: "64px", md: "64px" },
                        //  width:250,
                        width: "cal(100vh-250px)",
                        borderRight: "none",
                        background: {
                            xs: mode === "light" ? "skyblue" : "#4a4949",
                            sm: "white",
                            md: mode === "light" ? "white" : "#121212",
                            xl: mode === "light" ? "white" : "#121212",
                        },
                        height: {
                            xs: "70%",
                            sm: "cal(100vh-230px)",
                            md: "cal(100vh-64px)",
                            xl: "cal(100vh-64px)",
                        },
                        padding: { xs: 2 },
                        zIndex: 1,
                        borderRadius: {
                            xs: "0px 80px 0px 80px",
                            sm: "0px 80px 0px 80px",
                            md: 0,
                            xl: 0,
                        },
                    },
                }}
            >
                <List sx={{ marginLeft: { xs: "-3", sm: "7%", md: "8%" } }}>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <PersonAddAlt1Icon />
                            </ListItemIcon>
                            <ListItemText primary="Add" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Activity" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <GroupAddIcon />
                            </ListItemIcon>
                            <ListItemText primary="CreateGroup" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <ArchiveIcon />
                            </ListItemIcon>
                            <ListItemText primary="Archive" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                            <SettingsIcon />

                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <LogoutIcon />

                            </ListItemIcon>
                            <ListItemText primary="Log Out" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <NightlightIcon />
                            </ListItemIcon>
                            <Switch
                                onChange={(e) =>
                                    setMode(mode === "light" ? "dark" : "light")
                                }
                                inputProps={{ "aria-label": "controlled" }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            {/* </Box> */}
        </Box>
    );
}

export default Sidebar;
