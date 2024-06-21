import {ChangeEvent, useEffect, useState} from "react";
import Scene from "./Scene";
import {CapybaraType} from "../types";
import {Box, Button, IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as THREE from 'three';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
   CapybaraType.Applicant,
   CapybaraType.Baby1,
   CapybaraType.AStudent1,
   CapybaraType.BStudent1,
   CapybaraType.Beginner1,
   CapybaraType.Expert1,
   CapybaraType.Explorer1,
   CapybaraType.Legend,
   CapybaraType.Student,
   CapybaraType.Chill
  ]

  const onNext = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else setCurrentSlide(currentSlide + 1);
  }

  const onPrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else setCurrentSlide(currentSlide - 1);
  }


  return (
     <Box
     component={'div'}
      sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90vh', width: '98vw'}}>
       <Scene capybaraType={slides[currentSlide]} />
        <div>
          <IconButton onClick={onPrev} >
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={onNext}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
     </Box>
  )
}

export default Slider;
