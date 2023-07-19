import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrolBar'
import Loader from './Loader'
const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box 
     sx={{
        mt:{lg:'100px',xs:'100px'}
     }}
    >
        <Typography variant='h3' mb="50px" p={2}>
            Exercises that target the muscle group:
        </Typography>
        <Stack direction={'row'} sx={{p:'2',position:'relative'}}>
            {
                targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} />:
                <Loader />
            }
        </Stack>

        <Typography variant='h3' mt='100px' mb="50px" p={2}>
            Exercises that use the same Equipment:
        </Typography>
        <Stack direction={'row'} sx={{p:'2',position:'relative'}}>
            {
                equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} />:
                <Loader />
            }
        </Stack>
    </Box>
  )
}

export default SimilarExercises