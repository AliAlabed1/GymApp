import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions,fetchData, youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercises from '../components/SimilarExercises'



const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({})
  const [exerciseVideos, setexerciseVideos] = useState([])
  const [targetMuscleExercises, settargetMuscleExercises] = useState([])
  const [equipmentExercises, setequipmentExercises] = useState([])
  const {id}=useParams()
  
  useEffect(()=>{
    window.scroll({top:0})
    const fetchExercisesData = async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com';

      const youtubeSerchUrl='https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setexerciseDetail(exerciseDetailData)

      const exerciseVideoData= await fetchData (`${youtubeSerchUrl}/search?query=${exerciseDetailData.name + "exercise Gym"}`,youtubeOptions)
      setexerciseVideos(exerciseVideoData.contents)

      const targetMuscleExercisesData=await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions
      )
      settargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData=await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions
      )
      setequipmentExercises(equipmentExercisesData)
    }

    fetchExercisesData();

  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail