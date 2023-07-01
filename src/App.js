import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";
import "./App.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
function App() {
    const [mode, setMode] = useState("light");
    const [drawer, setDrawer] = useState(true);
    const [swipe, setSwipe] = useState(false);

    console.log("ss",swipe);

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm")); 
    console.log("QZZZ",drawer);
    
    useEffect(() => {

        matches ? setDrawer(true):setDrawer(false);
    },[matches])

    return ( 
        <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar drawer={drawer} setDrawer={setDrawer} swipe={swipe} setSwipe={setSwipe}/>
            <Stack direction="row" spacing={2} justifyContent={"space-between"}>
                <Sidebar setMode={setMode} mode={mode} drawer={drawer} setDrawer={setDrawer}/>
                <Feed />
                <Rightbar swipe={swipe} setSwipe={setSwipe}/>
            </Stack>
            <Add />
        </Box>
        </ThemeProvider>
    );
}

export default App;
