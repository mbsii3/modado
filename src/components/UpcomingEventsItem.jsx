import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { Box, Card, Typography, Link } from "@mui/material";
import dayjs from "dayjs";

export default function UpcomingEventsItem({ title, date, venue, url, image  }) {
    dayjs.extend(LocalizedFormat);
    return (
    <>
    
        <Box sx={{m: 1.5}}>
            <Card sx={{ p: 2 }}>
            <Link href={url} underline="none" target="_blank" rel="noreferrer" sx={{color: "black"}}>
                <img className="events-img" src={image} alt="" />
                <Typography sx={{mb: 1}} >{title}</Typography></Link>
                <Typography>{dayjs(date).format('LL')}</Typography>
                <Typography>{venue}</Typography>
            </Card>
        </Box>
    
    </>
    )
}