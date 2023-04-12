import { useState } from "react";
import { Box, Card, Typography, Container } from "@mui/material";



export default function WeatherWidget() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d365d1e596ad93e8f2730d228a267bf2`


    function searchLocation(e) {
        if (e.key === 'Enter') {
            fetch(url).then((response) => response.json()).then((data) => {
                setData(data)
                console.log(data);
            });
            setLocation('');
        }
        
    }

    return (
        <Card sx={{ m: 2,}}>
            <Container>
                <Box>
                    <Box sx={{fontFamily: 'outfit'}}>
                        <input type="text" placeholder="Search a City" value={location} onChange={e => setLocation(e.target.value)} onKeyDown={searchLocation} />
                        <Typography >{data.name}</Typography>
                    </Box>
                    <Box>
                        { data.main ?
                        <Typography variant="h3" >{Math.floor(data.main.temp)}°F</Typography> : null}
                    </Box>
                    <Box>
                        { data.weather ?
                        <Typography >{ data.weather[0].main }</Typography> : null }
                    </Box>
                </Box>
                <Box>
                    <Box>
                        { data.main ? 
                        <Typography >Feels like {Math.floor(data.main.feels_like)}°F</Typography>: null }
                    </Box>
                    <Box>
                        { data.main ? 
                        <Typography >{data.main.humidity}%</Typography>: null}
                    </Box>
                    <Box>
                        { data.wind ?
                        <Typography >{Math.floor(data.wind.speed)} MPH</Typography>: null}
                    </Box>
                </Box>  
            </Container>
        </Card>
    );

    
}