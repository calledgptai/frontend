import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import About from './About'
import CallIcon from '@mui/icons-material/Call';

const Number = () => {
    const phonenumber = '0018706003320';

    const handleCall = () => {
        window.location.href = `tell:${phonenumber}`;
    }
    return (
        <div>
            <Paper elevation={3} sx={{ m: 4, borderRadius: '50px' }}  >
                <Box sx={{ bgcolor: 'primary.main', color: 'background.paper', p: 1 , borderRadius: '50px'}}>
                    <About />
                </Box>
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mt: 10, letterSpacing: '.3rem', fontFamily: 'monospace' }}>
                    0018706003320
                </Typography>
                <Button variant="contained" href="#contained-buttons" size="large" endIcon={<CallIcon />} sx={{ m: 5, borderRadius: '100px' }} onClick={handleCall}>
                    <Typography variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                        Call Now to Explore
                    </Typography>
                </Button>
            </Paper>
        </div>
    )
}

export default Number