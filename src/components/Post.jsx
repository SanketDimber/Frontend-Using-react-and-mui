import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share"; 
import { CCD } from "./constants";
import { FEED_DATA } from "./DataFeed";

function Post() {
    return ( 
        <>
        {FEED_DATA.map((data) => (
        <Card sx={{ marginBottom:2 , boxShadow: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: data.color }} aria-label={data.lable}>
                        {data.name}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={data.title}
                subheader={data.subheader}
            />
            <CardMedia
                component="img"
                height="20%"
                image={data.photo}
                alt={data.al}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {data.dis}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        ))}
        </>
    );
}

export default Post;
