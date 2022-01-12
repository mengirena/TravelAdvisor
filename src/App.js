import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core' //For creating layout, CssBaline: normalize style

import { getPlacesData } from './api'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const App = () => {
    const [places, setPlaces] = useState([])

    const [coordinates, setCordinates] = useState({})
    const [bounds, setBoundss] = useState(null)

    useEffect(() => {
        getPlacesData()
            .then((data) => {
                console.log(data)

                setPlaces(data)
            })
    }, [])

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates} 
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
            
        </>
    )
}

export default App
