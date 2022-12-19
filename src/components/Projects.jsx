import React from 'react'
import styled from "styled-components";
import Card from "./Card.jsx";
import {cardItems} from "../data.js"

const Container = styled.div`
width: 100%;
height: 100%;
background-color: black;
background-image: linear-gradient(#12dade, #212121);
display: flex;
flex-direction: column;
align-items: center;
`

const Text = styled.p`
margin: 0;
text-align: center;
font-size: 30px;
`

const CardContainer = styled.div`
width: 70%;
display: flex;
flex-direction: column;
`

const Projects = () => {
  return (
    <Container id="Projects">
        <Text>Heres some of my previous work!</Text>
        <CardContainer>
          {cardItems.map((item) => (<Card item={item} key={item.id}/>))}
        </CardContainer>
    </Container>
  )
}

export default Projects;
