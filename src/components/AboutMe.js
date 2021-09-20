import React from 'react';
import selfie from '../assets/images/chess_bio.jpg'

export default function AboutMe() {
  return (
    <>
      <img src={selfie} className="selfie" alt="Bryan Bentz" />
      <p>I am a passionate developer, proud dad, linux and javascript guru. I want to work for you.</p>
      <p>I know how to think fast and type fast for you. Let me develop your next websites
        I have been on computers for more than 30 years, with many years of experience in system administration, and my first website design when I was in high school
        Let this proud dad make your next website.</p>
    </>
  )
}