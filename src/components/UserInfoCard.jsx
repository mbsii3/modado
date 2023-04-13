import { Card, CardContent, Typography } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import userImage from "../images/user.jpg";
import { Link } from "react-router-dom";

export default function UserInfoCard({user}) {
    return (
        <>
                <Card sx={{  m:2 , minHeight: '275px' }}>
                    <CardContent>
                    <Link to={`users/${user._id}`} >
                        <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'outfit' }} >
                           {user.firstName} {user.lastName}
                        </Typography>
                        <Typography sx={{ fontSize: 12, mt: -1, fontFamily: 'outfit' }}>
                        @{user.userName}
                        </Typography>
                        <img className="user-img" src={userImage} alt="" />
                        </Link>
                        <Typography sx={{ 
                            fontSize: 12,
                            display: "flex",
                            flexWrap: "wrap",
                            fontFamily: 'outfit'
                             }}>
                        <PlaceIcon sx={{fontSize: 16, mr: 1}} /> {user.location}
                        </Typography>
                        <Typography sx={{ 
                            fontSize: 12,
                            display: "flex",
                            flexWrap: "wrap",
                            fontFamily: 'outfit'
                             }}>
                        <WorkIcon sx={{fontSize: 16, mr: 1}} /> {user.occupation}
                        </Typography>
                    </CardContent>
                </Card>
        </>
    );
}