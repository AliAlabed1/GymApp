import React from 'react'
import {Box,Typography,Stack,Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
   <Box
    sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'}
    }}
    position={'relative'}
    p='20px'
   >
    <Typography 
        color='#FF2625'
        fontWeight={'600'}
        fontSize={'26px'}
    >
        Fitness Club
    </Typography>
    <Typography
        fontWeight={'700'}
        sx={{
            fontSize:{lg:'44px',xs:'40px'}
        }}
        mt='35px'
        mb='40px'
    >
        Sweat , Smile <br></br> and Repeat
    </Typography>
    <Typography
        fontSize={'22px'}
        lineHeight={'35px'}
        mb={3}
    >
        Check out the most efective exercises
    </Typography>
    <Button
      variant={'contained'}
      color='error'
      href='#exercises'
    >
        Explore Exercises
    </Button>
    <Typography
      fontWeight={600}
      color='#FF2625'
      fontSize={'200px'}
      sx={{
        opacity:0.1,
        display:{lg:'block',xs:'none'}
      }}
    >
        Exercises
    </Typography>
    <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
   </Box>
  )
}

export default HeroBanner