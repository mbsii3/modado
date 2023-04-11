import { Card, CardContent, Typography } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import userImage from "../images/user.jpg";

export default function UserInfoCard({user}) {
    return (
        <>
                <Card sx={{  m:2 }}>
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 700 }} >
                        {user.firstName} {user.lastName}
                        </Typography>
                        <Typography sx={{ fontSize: 12, mt: -1 }}>
                        @{user.userName}
                        </Typography>
                        <img className="user-img" src={userImage} alt="" />
                        <Typography sx={{ 
                            fontSize: 12,
                            display: "flex",
                            flexWrap: "wrap"
                             }}>
                        <PlaceIcon sx={{fontSize: 16, mr: 1}} /> {user.location}
                        </Typography>
                        <Typography sx={{ 
                            fontSize: 12,
                            display: "flex",
                            flexWrap: "wrap"
                             }}>
                        <WorkIcon sx={{fontSize: 16, mr: 1}} /> {user.occupation}
                        </Typography>
                    </CardContent>
                </Card>
        </>
    );
}