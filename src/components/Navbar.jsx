import React from 'react'
import styled from "styled-components";

const Container = styled.div`
background-color: transparent; 
display: flex;
align-items: center;
justify-content:space-between;
height: 10vh;
width: 100%
`

const Logo = styled.h1`
margin-left: 100px;
color:#fff;
`

const MusicContainer = styled.div``

const Volume = styled.div``

const PlayPause = styled.div``

const SongSelect = styled.div``

const RightContainer = styled.div`
margin-right: 70px;
`

const Button = styled.button`
margin-right: 20px;
background-color: transparent;
border: none;
color:#fff;
font-size:20px;
align-items:center;
padding: 10px};
`

const Navbar = () => {
  return (
    <Container>
      <Logo>Tyler</Logo>
      <MusicContainer>
        <Volume></Volume>
        <PlayPause></PlayPause>
        <SongSelect></SongSelect>
      </MusicContainer>
      <RightContainer>
        <Button>Home</Button>
        <Button>Projects</Button>
        <Button>Contact Me</Button>
      </RightContainer>
    </Container>
  )
}

export default Navbar
