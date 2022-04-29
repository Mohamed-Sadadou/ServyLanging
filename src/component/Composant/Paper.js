import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from '../../Images/Group 49.png';
import img2 from '../../Images/Group 50.png';
import img3 from '../../Images/Group 51.png';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {
    return (
        <Card sx={{
            backgroundColor:'rgb(0,0,0,0)',
            boxShadow:'none',
            width: 275,
            minWidth: 275,
            marginRight: '60px',
            marginLeft: '60px',
            marginTop:'-30px',
            marginBottom:'60px',
            height: '400px',

        }}>
            <CardContent>
                <Typography sx={{fontFamily:" 'Prompt', sans-serif", fontSize: '18px', color: 'black', fontWeight:'bold' }} gutterBottom>
                    {props.titre}
                </Typography>
                <Typography sx={{fontFamily:" 'Prompt', sans-serif", mb: 1.5, fontSize: '12px' }} color="text.secondary">
                    {props.description}
                </Typography>
                <Typography variant="body2">
                    {props.image == '1' &&
                    <div >
                        <img src={img1} style={{marginLeft:'-15px', width: '275px', height: '140px',}} alt="fireSpot" />
                    </div>
                    }
                     {props.image == '2' &&
                    <div>
                        <img src={img2} style={{marginLeft:'-15px', width: '275px', height: '140px',marginTop:'25px'}} alt="fireSpot" />
                    </div>
                    }
                     {props.image == '3' &&
                    <div>
                        <img src={img3} style={{marginLeft:'-15px', width: '275px', height: '140px',marginTop:'25px'}} alt="fireSpot" />
                    </div>
                    }
                    
                </Typography>
                <Typography sx={{fontFamily:" 'Prompt', sans-serif", mb: 1.5 ,fontSize: '12px' , marginTop:'20px'}} color="text.secondary">
                    {props.description2}
                </Typography>
            </CardContent>

        </Card>
    );
}
