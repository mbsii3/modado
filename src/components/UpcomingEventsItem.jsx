import { Box, Card, Typography } from "@mui/material";

export default function UpcomingEventsItem({ title, date, venue, url, image  }) {
    return (
    <>
    
        <Box sx={{m: 1.5}}>
            <Card sx={{ p: 1.5 }}>
                <img className="events-img" src={image} alt="" />
                <Typography sx={{mb: 1, fontFamily: 'outfit'}} ><a href={url} target="_blank" rel="noreferrer">{title}</a></Typography>
                <Typography>{date}</Typography>
                <Typography>{venue}</Typography>
            </Card>
        </Box>
    
    </>
    )
}