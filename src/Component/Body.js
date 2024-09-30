import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Body = () => {
    return (
        <div>
            <Paper elevation={3} sx={{ m: 4, height: '26.7vh', overflowY: 'auto', borderRadius: '50px' }} >
                <Box sx={{ bgcolor: 'secondary.main', color: 'background.paper', p: 2 }}>
                    <Typography variant="h4" component="h2" sx={{ textAlign: 'center', m: 3 }}>
                        Welcome to CallGpt 2024
                    </Typography>
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center', m: 3 }}>
                        Get instant answer to  your questions from our advanced AI. 
                    </Typography>
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center', m: 3 }}>
                        Access a vast knowledge base of information on various topics.
                    </Typography>
                </Box>
            </Paper>
        </div>
    )
}

export default Body