import { Box, Card, Typography } from "@mui/material";

export default function NewsFeedItem({ title, description, url }) {
    return (
    <>
    
        <Box sx={{m: 1.5}}>
            <Card sx={{ p: 2 }}>
                <Typography sx={{mb: 1}} ><a href={url} target="_blank">{title}</a></Typography>
                <Typography variant="body2" >{description}</Typography>
            </Card>
        </Box>
    
    </>
    )
}