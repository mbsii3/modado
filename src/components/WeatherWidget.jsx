import { useState } from "react";
import { Box, Card, Typography, Container, Input } from "@mui/material";
import { alpha } from "@mui/material";
import backgroundImg from '../images/weather-bg.jpeg'



export default function WeatherWidget() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d365d1e596ad93e8f2730d228a267bf2`


    function searchLocation(e) {
        if (e.key === 'Enter') {
            fetch(url).then((response) => response.json()).then((data) => {
                setData(data)
            });
            setLocation('');
        }
        
    }

    return (
        <Card sx={{ m: 1.5, minHeight: '200px', backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }}>
            <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
                
                <Input sx={{color: '#fff', mb: 1}} type="text" placeholder="Search a City" value={location} onChange={e => setLocation(e.target.value)} onKeyDown={searchLocation} />
                
                <Box sx={{ mt: .5 }}>
                    <Box >
                        <Typography sx={{ color: '#fff', fontWeight: 500}} >{data.name}</Typography>
                    </Box>
                    <Box>
                        { data.main ?
                        <Typography sx={{ color: '#fff', fontWeight: 500}} variant="h3" >{Math.floor(data.main.temp)}°F</Typography> : null}
                    </Box>
                    <Box>
                        { data.weather ?
                        <Typography sx={{ color: '#fff', fontWeight: 500}} >{ data.weather[0].main }</Typography> : null }
                    </Box>
                </Box>


                { data.name != undefined &&
                <Box sx={{ display: "flex",
                            justifyContent: "space-evenly",
                            width: "100%",
                            m: "auto",
                            mt: 1.7,
                            borderRadius: 12,
                            backgroundColor: alpha('#fff', 0.2),
                            bottom: "100%"
                            
                            }}>
                    <Box sx={{ textAlign: "center" }}>
                        { data.main ? 
                        <Typography sx={{ mb: -1, fontSize: "13px", color: '#fff' }} >{Math.floor(data.main.feels_like)}°F</Typography>: null }
                        <Box ><Typography sx={{ color: '#fff' }}>Feels Like</Typography></Box>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        { data.main ? 
                        <Typography sx={{ mb: -1, fontSize: "13px", color: '#fff' }} >{data.main.humidity}%</Typography>: null}
                        <Box ><Typography sx={{ color: '#fff' }}>Humidity</Typography></Box>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        { data.wind ?
                        <Typography sx={{ mb: -1, fontSize: "13px", color: '#fff' }} >{Math.floor(data.wind.speed)} MPH</Typography>: null}
                        <Box ><Typography sx={{ color: '#fff' }}>Wind</Typography></Box>
                    </Box>
                </Box>  }
            </Container>
        </Card>
    );

    
}