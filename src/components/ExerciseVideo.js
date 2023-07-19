import React from 'react'
import { Box , Stack,Typography } from '@mui/material'

const ExerciseVideo = ({exerciseVideos,name}) => {
  
  return (
    <Box
      sx={{
        marginTop:{lg:'200px',xs:'20px'},
      }}
      p='20px'
    >
        <Typography variant='h3' mb='33px'>
            Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise videos
        </Typography>
        <Stack
          justifyContent={'flex-start'}
          flexWrap={'wrap'}
          alignItems={'center'}
          sx={{
            flexDirection:{lg:'row'},
            gap:{lg:'110px',xs:'100px'}
          }}
        >
            {
                exerciseVideos?.slice(0,3).map((video,idx)=>(
                    <a 
                     key={idx} 
                     className='exercise-video' 
                     href={`https://www.youtube.com/watch?v=${video.video.videoId}`} 
                     target="_blank"
                     rel='noreferrer'
                    >
                        <img src={video.video.thumbnails[0].url} alt={video.video.title}/>
                        <Box>
                            <Typography variant='h5' color="black">
                                {video.video.title.slice(0,40)}...
                            </Typography>
                            <Typography variant='h6' color="black">
                                {video.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))
            }
        </Stack>
    </Box>
  )
}

export default ExerciseVideo