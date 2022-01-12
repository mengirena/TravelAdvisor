import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery} from '@material-ui/core' //Paper: a div with background color, useMediaQuery: make the map more reponsive on mobile
import LocationOnOutlineIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab' //importing from lab because it's still been working on

import useStyles from './styles'

const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width: 600px)') //isMobile will be set to be false if the media is larger than 600px

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: '' }}
                // AIzaSyCHBfhqw_UphqU7KTJAfXt427v6J0_2eoA
                defaultCenter={ coordinates }
                center={ coordinates }
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >
                {/*  create new projects on google developers' console  */}
                
            </GoogleMapReact> 
        </div>
    )
}

export default Map
