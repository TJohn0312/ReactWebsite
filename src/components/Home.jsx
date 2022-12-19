import React from 'react'
import styled from "styled-components";
// import Navbar from "./Navbar.jsx"

const Container = styled.div`
height: 110vh;
padding-top:10vh;
background-image: linear-gradient(rgba(33, 33, 33, 0.0), #12dade), url("https://thumbs.dreamstime.com/z/fashion-man-handsome-serious-beauty-male-model-portrait-wear-leather-jacket-young-guy-over-black-background-fashion-man-handsome-191101373.jpg")
`

const NNavbar = styled.div`
`

const Wrapper = styled.div`
padding-top:15vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
height: 50%;
width: 100%;
`

const Title = styled.h1`
font-size: 100px;
color: white;
margin: 0 0 10px;
`

const Text = styled.p`
font-size: 30px;
color: white;
margin: 0;
`

const ButtonContainer = styled.div`

`

const Button = styled.button`
margin: 30px 10px 0;
font-size:20px;
font-weight: bold;
padding: 10px 15px;
border: 2px solid white;
border-radius: 2px;
background-color: ${props => props.white ? "white" : "transparent"};
color: ${props => props.white ? "black" : "white"};
`


const Home = () => {
  return (
    <Container id="Home">
      <Wrapper>
        <Title>Tyler Lee Johnson</Title>
        <Text>A Web-Developer</Text>
        <ButtonContainer>
        </ButtonContainer>
      </Wrapper>
    </Container>
  )
}

export default Home
