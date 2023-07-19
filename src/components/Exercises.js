import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import { Box,Stack,Typography } from '@mui/material'

import {exerciseOptions,fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'
const Exercises = ({exercises,setexercises,bodyPart}) => {
  const [currentPage, setcurrentPage] = useState(1)
  const exercisesPerPage=9
  const idxOfLastExercise=currentPage*exercisesPerPage;
  const idxOfFirstExercise=idxOfLastExercise-exercisesPerPage;
  const currentexercises=exercises.slice(idxOfFirstExercise,idxOfLastExercise);
  const paginate=(e,value)=>{
    setcurrentPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})
  }
  useEffect(()=>{
    const fetchExercisesData=async ()=>{
      let exercisesData=[];

      if(bodyPart === 'all'){
        exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises ',exerciseOptions);
      } else {
        exercisesData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setexercises(exercisesData )
    }
    fetchExercisesData();
  },[bodyPart])
  return (
    <Box 
     id='#exercises'
     sx={{
      mt:{lg:'110px'}
     }}
     mt='50px'
     p='20px'

    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      {
        exercises.length>0?
        <>
         <Stack 
            direction={'row'}
            sx={{
              gap:{lg:'110px',xs:'50px'}
            }}
            flexWrap='wrap'
            justifyContent={'center'}
            >
              {
                currentexercises.map((exercise,idx)=>(
                  <ExerciseCard key={idx} exercise={exercise}/>
                ))
              }
            </Stack>
            <Stack mt='100px' alignItems={'center'}>
              {
                exercises.length >exercisesPerPage && (
                  <Pagination
                    color="standard"
                    shape='rounded'
                    defaultPage={1}
                    count={Math.ceil(exercises.length/exercisesPerPage)}
                    paage={currentPage}
                    onChange={paginate}
                    size='large'
                  />
                )
              }
            </Stack>
        </>:
        <Loader />
      }
    </Box>
  )
}

export default Exercises