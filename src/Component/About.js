import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <div>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'left', m: 3, p: 1 }}>
                What is CallGpt ?
            </Typography>
            <Typography variant="h6" component="h2" sx={{ textAlign: 'left', m: 3 }}>
                Called GPT is an AI-powered voice call assistant that helps users solve queries using natural language processing (NLP) and speech recognition.
            </Typography>
            <Typography variant="h6" component="h2" sx={{ textAlign: 'left', m: 3 }}>
                It enables real-time, smooth interactions by transcribing voice inputs, processing them through an AI engine, and generating intelligent responses.
            </Typography>
            <Typography variant="h6" component="h2" sx={{ textAlign: 'left', m: 3 }}>
                The system supports multiple languages, ensuring accessibility for a diverse user base.
            </Typography>
        </div>
    )
}

export default About