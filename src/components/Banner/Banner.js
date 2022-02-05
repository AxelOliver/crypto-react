import { Container, makeStyles, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React from 'react'
import Carousel from './Carousel'

const useStyles = makeStyles(() => ({
    banner: {

    },
    bannerContent: {
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around',
        border: '2px solid white',
    },
    tagline: {
        display: 'flex',
        height: '40%',
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around',
        textAlign: 'center'
    }
}))

const Banner = () => {
    const classes = useStyles();
  return (
      <div className={classes.banner}>
          <Container className={classes.bannerContent}>
              <div className={classes.tagline}>
                  <Typography variant='h2' style={{
                      fontWeight:'bold',
                      marginBottom:15,
                      fontFamily:'Roboto',
                  }}>
                      Crypto React
                  </Typography>
                  <Typography variant='subtitle2' style={{
                      color: '#9DB5B2',
                      textTransform: 'capitalize',
                      fontFamily: 'Roboto',
                  }}>
                      Check out the latest crypto market movements
                  </Typography>
              </div>
              <Carousel />
          </Container>
      </div>
  )
}

export default Banner
