import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Uses = () => {
    return (
        <div>
            <Paper elevation={3} sx={{ m: 4 , borderRadius: '50px'}} >
                <Box sx={{ bgcolor: 'error.main', color: 'error.contrastText', p: 3, borderRadius: '50px' }}>
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                        How To Use CallGpt ?
                    </Typography>
                </Box>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mt: 1, p: 2 }}>
                    Click on the Call Now Button
                </Typography>
            </Paper>
        </div>
    )
}

export default Uses