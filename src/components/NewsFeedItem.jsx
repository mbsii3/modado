import { Box, Card, Typography } from "@mui/material";

export default function NewsFeedItem({ title, url, urlToImage }) {
    return (
    <>
    
        <Box sx={{m: 1.5}}>
            <Card sx={{ p: 1.5 }}>
                <img className="news-img" src={urlToImage} alt="" />
                <Typography sx={{mb: 1, fontFamily: 'outfit'}} ><a href={url} target="_blank" rel="noreferrer">{title}</a></Typography>
            </Card>
        </Box>
    
    </>
    )
}