import React from 'react'
import {Box, Card, CssBaseline} from "@mui/material"
import Top from "./components/Top"

function App() {
    return (
        <>
            <CssBaseline />
            <Box>
                <Card sx={{padding: 10,}}>
                    Hello 123
                </Card>
                <Top />
            </Box>
        </>
    )
}

export default App
