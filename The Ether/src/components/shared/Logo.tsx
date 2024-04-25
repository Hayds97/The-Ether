import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
    return <div style={{
                display:'flex', marginRight:'auto',
                alignItems:'center', gap:'8px'}}>
            <Link to={"/"}> 
                <img src='The Ether(1).png' alt='The Ether' width={'100px'} height={'100px'} className='image-inverted'/>
            </Link>
            <Typography 
    sx={{ 
        display: {xs: "none", sm: "block", md: "block"}, 
        mr: "auto", 
        fontWeight:"800", 
        textShadow:"none", 
        color:"#000"
    }}
>
    <span style={{fontSize: "20px" }}></span>GPT
        </Typography>
        </div>;
    
};

export default Logo
