import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const OurImpacts = () => {
    return (
        <div>
            <Paper elevation={3} sx={{ m: 4, borderRadius: '50px' }} >
                <Box sx={{ bgcolor: 'primary.main', color: 'background.paper', p: 3, borderRadius: '50px' }}>
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                        <LocalFireDepartmentIcon /> Our Impacts
                    </Typography>
                </Box>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mt: 1, p: 1 }}>
                    Accessibility
                </Typography>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mt: 1, p: 1 }}>
                    Automation of Customer Service
                </Typography>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mt: 1, p: 1 }}>
                    Multilingual Communication
                </Typography>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mt: 1, p: 1 }}>
                    Scalability
                </Typography>
            </Paper>
        </div>
    )
}

export default OurImpacts