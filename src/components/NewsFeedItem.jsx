import { Box, Card, Typography } from "@mui/material";

export default function NewsFeedItem({ title, url, description }) {
    return (
    <>
    
        <Box sx={{m: 2}}>
            <Card sx={{ p: 2 }}>
                <Typography sx={{mb: 2, fontFamily: 'outfit'}} ><a href={url} target="_blank" rel="noreferrer">{title}</a></Typography>
                <Typography>{description}</Typography>
            </Card>
        </Box>
    
    </>
    )
}