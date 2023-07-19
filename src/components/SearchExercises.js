import React,{useEffect,useState} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { fetchData,exerciseOptions } from '../utils/fetchData'
import HorizontalScrolBar from './HorizontalScrolBar'
const SearchExercises = ({setexercises,bodyPart,setbodyPart}) => {
  const [search, setsearch] = useState("")
  const url= 'https://exercisedb.p.rapidapi.com/exercises ';
  const [bodyParts, setbodyParts] = useState([])
  const handleSearch = async () =>{
    if(search){
      const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises ',exerciseOptions);
      const searchedExercises=exercisesData.filter((exercise)=>
      exercise.name.toLocaleLowerCase().includes(search)||
      exercise.target.toLocaleLowerCase().includes(search)||
      exercise.equipment.toLocaleLowerCase().includes(search)||
      exercise.bodyPart.toLocaleLowerCase().includes(search)
      )
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setsearch("");
      setexercises(searchedExercises)
    }
  }
  useEffect(()=>{
    const fetcExercisesData=async()=>{
      const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
      setbodyParts(['all',...bodyPartsData])
    }
    fetcExercisesData()
  },[])
  return (
    <Stack
      alignItems={'center'}
      mt={'37px'}
      justifyContent={'center'}
      p='20px'
    >
        <Typography
          fontWeight={700}
          sx={{
            fontSize:{lg:'44px',xs:'30px'}
          }}
          mb='50px'
          textAlign={'center'}
        >
            Awesome Exercises you <br/> Should Know
        </Typography>
        <Box position={'relative'} mb='72px'>
          <TextField 
            sx={{
              input:{
                fontWeight:700,
                border:'none',
                borderRadius:'4px'
              },
              width:{
                lg:'800px',xs:'350px'
              },
              backgroundColor:'#fff',
              borderRadius:'40px'

            }}
            height='76px'
            value={search}
            onChange={(e)=>setsearch(e.target.value.toLocaleLowerCase())}
            placeholder='Search Exercises'
            type='text'
          />
          <Button className='search-btn'
            sx={{
              bgcolor:'#FF2625',
              color:'#fff',
              textTransform:'none',
              width:{lg:'175px',xs:'80px'},
              fontSize:{lg:'20px',xs:'14px'},
              height:'56px',
              position:'absolute',
              right:0
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            position:'relative',
            width:'100%',
            padding:'20px'
          }}
        >
          <HorizontalScrolBar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart} isBodyPart/>
        </Box>
    </Stack>
  )
}

export default SearchExercises