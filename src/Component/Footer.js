import { Box, Grid2, Typography, Item } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Box sx={{ bgcolor: 'success.main', color: 'success.contrastText', p: 2, borderRadius: '16px' }}>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mt: 1 }}>
                    Developed by TEAM TETRA
                </Typography>
                <Grid2 container spacing={9} 
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    m: 3
                }}>
                    <Grid2 item xs={6} >
                        <Typography variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                            Pranav Sharma
                        </Typography>
                    </Grid2>
                    <Grid2 item xs={6}>
                        <Typography variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                            Abhishek Yadav
                        </Typography>
                    </Grid2>
                    <Grid2 item xs={6}>
                        <Typography variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                            Shivam Sharma
                        </Typography>
                    </Grid2>
                    <Grid2 item xs={6}>
                        <Typography variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                            Sumair Khan
                        </Typography>
                    </Grid2>
                </Grid2>
            </Box>
        </div>
    )
}

export default Footer