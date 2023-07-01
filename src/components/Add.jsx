import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PhotoIcon from "@mui/icons-material/Photo";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 15,
    marginBottom: "20px",
});

function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                title="Add"
                sx={{
                    position: "fixed",
                    bottom: 30,
                    left: { xs: "calc(50% - 25px)", md: 30 },
                }}
                onClick={(e) => setOpen(true)}
            >
                <Fab color="primary" aria-label="add">
                    <AddCircleIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box
                    // width={400}
                    // height={280}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    padding={3}
                    style={{ borderRadius: "0px 80px 0px 80px" }}
                    sx={{
                        width: { xs: 300, sm: 320, md: 400 },
                        height: { xs: 220, sm: 240, md: 280 },
                        border: "2px solid #FFD700"
                    }}
                >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                    <Avatar sx={{ bgcolor: "red", width: 30, height: 30 }}>S</Avatar>
                        <Typography fontWeight={600}>Sushant</Typography>
                    </UserBox>
                    <TextField
                        sx={{
                            width: "100%",
                        }}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        placeholder="What's up"
                        variant="standard"
                    />
                    <Stack direction="row" gap={2} mt={1} mb={3}>
                        <EmojiEmotionsIcon color="primary" />
                        <PhotoIcon color="secondary" />
                        <VideoCameraBackIcon color="success" />
                        <PersonAddAlt1Icon color="error" />
                    </Stack>

                    <ButtonGroup
                        variant="contained"
                        aria-label="split button"
                        sx={{
                            width: "90%",
                            height: { xs: 35, sm: 36, md: 40 },
                            marginTop: { xs: -1.5, sm: -1, md: 3 },
                            marginLeft: { xs: 5, sm: 4, md: 3 },
                            borderRadius: "0px 20px 0px 20px",
                        }}
                    >
                        <Button
                            sx={{
                                width: "80%",
                                borderRadius: "0px 0px 0px 20px",
                            }}
                        >
                            ABC
                        </Button>
                        <Button
                            size="small"
                            aria-controls={
                                open ? "split-button-menu" : undefined
                            }
                            aria-expanded={open ? "true" : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            sx={{
                                width: "20%",
                                borderRadius: "0px 20px 0px 0px",
                            }}
                        >
                            <ScheduleSendIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
}

export default Add;
