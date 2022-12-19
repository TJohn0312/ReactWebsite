import React from 'react'
import styled from "styled-components";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const Container = styled.div`
z-index:2;
position: fixed;
top: 0;
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

const MusicContainer = styled.div`
display: flex;
align-items: center;
flex: 2;
margin-left: 5%;
`

const Volume = styled.div`

color: white;
cursor: pointer;
transition: all .8s;
:hover{transform:scale(1.05)}
`

const PlayPause = styled.div`
color: white;
cursor: pointer;
transition: all .5s;
:hover{transform:scale(1.1)}
`

const SongSelect = styled.div`

color: white;
cursor: pointer;
transition: all .5s;
:hover{transform:scale(1.2)}
`

const RightContainer = styled.div`
margin-right: 70px;
`

const Button = styled.a`
margin-right: 20px;
background-color: transparent;
border: none;
color:#fff;
font-size:20px;
align-items:center;
padding: 10px};
text-decoration: none;

cursor: pointer;
transition: all .8s;
:hover{transform:scale(1.05)}
`

const Navbar = () => {
  return (
    <Container>
      <Logo>Tyler</Logo>
      <MusicContainer>
        <Volume></Volume>
        <SongSelect><SkipPreviousIcon /></SongSelect>
        <PlayPause><PlayCircleOutlineIcon /></PlayPause>
        <SongSelect><SkipNextIcon /></SongSelect>
      </MusicContainer>
      <RightContainer>
        <Button href="#Home">Home</Button>
        <Button href="#Projects">Projects</Button>
        <Button href="#Footer">Contact Me</Button>
      </RightContainer>
    </Container>
  )
}

export default Navbar
