import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const Introduction = () => {
    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <GraphicEqIcon size />
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            sx={{
                                m: 3,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 900,
                                letterSpacing: '.4rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            CallGpt
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Introduction