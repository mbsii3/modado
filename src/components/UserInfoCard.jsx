import { Card, CardContent, Typography, Link } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import userImage from "../images/user.jpg";


export default function UserInfoCard({user}) {
    return (
        <>
                <Card sx={{  my:2 , height: '200px' }}>
                    <CardContent sx={{ textAlign: "center" }}>
                    <Link href={`users/${user._id}`} underline="none" >
                        <img className="user-img" src={userImage} alt="" />
                        <Typography variant="h6" sx={{ fontWeight: 700 }} >
                           {user.firstName} {user.lastName}
                        </Typography>
                        <Typography sx={{ fontSize: 12, mt: -1 }}>
                        @{user.userName}
                        </Typography>
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