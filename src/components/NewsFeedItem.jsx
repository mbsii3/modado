import { Box } from "@mui/material";

export default function NewsFeedItem({ title, url }) {
    return (
    <>
        <Box sx={{m: 2}}>
            <a href={url} target="_blank">{title}</a>
        </Box>
        
    </>
    )
}