import {

    Box
  
} from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Rightbartrue from "./Rightbartrue";
import Rightbarfalse from "./Rightbarfalse";


function Rightbar({swipe,setSwipe}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    console.log("IN right ", swipe);
    return (
        <>
            
                <Box
                    sx={{ flex:{ xm: 0, sm: 0, md:0, xl: 2 },padding: { xm: 0, sm: 0, md: 0, xl: 2 }}}
                >
                    {matches ? (
                 
                        <Rightbartrue />

                      ) : (
                        <Rightbarfalse swipe={swipe} setSwipe={setSwipe}/> 
                    
                    )}
                </Box>
          
        </>
    );
}

export default Rightbar;
