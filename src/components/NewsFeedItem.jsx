import { Box, Card, Typography } from "@mui/material";

export default function NewsFeedItem({ title, url, description }) {
    return (
    <>
    
        <Box sx={{m: 2}}>
            <Card sx={{ p: 1.5, maxHeight: "150px" }}>
                <Typography sx={{ fontFamily: 'outfit'}} ><a href={url} target="_blank" rel="noreferrer">{title}</a></Typography>
                <Typography sx={{ mb: 1, py: 1.6}}>{description}</Typography>
            </Card>
        </Box>
    
    </>
    )
}