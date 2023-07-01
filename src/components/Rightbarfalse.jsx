

// import React from 'react'


import * as React from 'react';

import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Rightbartrue from './Rightbartrue';

const drawerBleeding = 50;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function Rightbarfalse({swipe,setSwipe}) {
  

  console.log("IN swipe ",swipe);


  // This is used only for the example
 

  return (
    <Root>
   
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(70% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
     
      <SwipeableDrawer
      
        anchor="bottom"
        open={swipe}
        onClose={e => setSwipe(false)}
        onOpen={e => setSwipe(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }} 
  
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'true',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>Quick</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '200%',
            overflow: 'auto',
          }}
        >

          <Rightbartrue />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}



export default Rightbarfalse;