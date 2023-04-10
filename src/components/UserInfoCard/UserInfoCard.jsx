import { Card, CardContent, Typography } from "@mui/material";

export default function UserInfoCard({user}) {
    return (
        <>
                <Card sx={{  m:2 }}>
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 700 }} >
                        {user.firstName} {user.lastName}
                        </Typography>
                        <Typography sx={{ fontSize: 12, mt: -1, mb: 4 }}>
                        @{user.userName}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                        {user.location}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>
                        {user.occupation}
                        </Typography>
                    </CardContent>
                </Card>
        </>
    );
}