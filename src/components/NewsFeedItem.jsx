import { Box, Card, Typography, Link } from "@mui/material";

export default function NewsFeedItem({ title, url, description }) {
    return (
    <>
    
        <Box sx={{m: 2}}>
            <Card sx={{ px: 1.5, pb: 1.5, pt: 1, maxHeight: "165px" }}>
                <Typography ><Link underline="none" href={url} target="_blank" rel="noreferrer">{title}</Link></Typography>
                <Typography sx={{ py: 1}}>{description}</Typography>
            </Card>
        </Box>
    
    </>
    )
}