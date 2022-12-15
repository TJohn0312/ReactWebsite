import React from 'react'
import styled from "styled-components";
// import Card from "./Card.jsx";

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
width: 900px;
display: flex;
flex-direction: column;
`

const Card = styled.div`
background-color: #323232;
overflow: hidden;
height:300px;
width:600px;
border-radius: 25px;
margin: ${(props) => props.Right ? "0 0 0 auto" : "40px auto 40px 0"};
display: flex;

cursor: pointer;
transition: all .8s;
:hover{transform:scale(1.05)}
`

const Left = styled.div`
background-image: linear-gradient(#9b9b9b, #212121);
height: 100%;
width: 40%;
padding: 5%;
font-size: 25px;
color:white;
`

const CardText = styled.p`
`

const Right = styled.div`
height: 100%;
width: 50%;
`

const CardImg = styled.img`

`

const Projects = () => {
  return (
    <Container>
      <Text>Heres some of my previous work!</Text>
      <CardContainer>
        <Card>
          <Left>
            <CardText>An E-commerse react based website styled around leatherworking connected by stripe</CardText>
          </Left>
          <Right>
            <CardImg />
          </Right>
        </Card> 
        <Card Right>
          <Left>
            <CardText>A collection of basic projects rolled into one place</CardText>
          </Left>
          <Right>
            <CardImg />
          </Right>
        </Card> 
        <Card>
          <Left>
            <CardText>This site</CardText>
          </Left>
          <Right>
            <CardImg />
          </Right>
        </Card> 
      </CardContainer>
    </Container>
  )
}

export default Projects;
