import React from 'react'
import styled from "styled-components";
import {MailOutline, GitHub, PermPhoneMsg,} from "@mui/icons-material";

const Container = styled.div`
background-color: #212121;
color: white;
`

const Top = styled.div`
width: 100%;
height: 22vh;
display:flex;

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction:column;
`

const LeftTitle = styled.h1`
font-size:50px;
margin: 32px 100px 16px;
`

const LeftText = styled.p`
font-size:25px;
margin: 0 100px 32px;
`

const Center = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const CenterText = styled.div`
font-size: 30px;
justify-content: center;
align-items: center;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const RightTitle = styled.h1`
margin: 42px 50px 0  0;
`

const RightTextContainer = styled.div`
margin: 0;
`

const RightText = styled.p`
display:flex;
align-items: center;
margin: 10px 0;
`

const Hr = styled.hr`
border-color: black;
margin: 10px;
`

const Bottom = styled.div`
width: 100%;
height: 8vh;
display:flex;
alignItems: center;
justify-content: center;
`

const Copyright = styled.div`

`
const date = new Date().getFullYear();
const Footer = () => {
  return (
    <Container>
      <Top>
        <Left>
          <LeftTitle>TYLER</LeftTitle>
          <LeftText>Tyler Johnson</LeftText>
        </Left>
        <Center>
          <CenterText>
            If you like my work, <br /> Concider working with me
          </CenterText>
        </Center>
        <Right>
          <RightTitle>Contact Me:</RightTitle>
          <RightTextContainer>
            <RightText><MailOutline />Email: tyleej0312@gmail.com</RightText>
            <RightText><PermPhoneMsg/>Phone: 984 414 7780</RightText>
            <RightText><GitHub/>GitHub: TJohn0312</RightText>
          </RightTextContainer>
        </Right>
      </Top>
      <Hr />
      <Bottom>
        <Copyright>Copyright {date}</Copyright>
      </Bottom>
    </Container>
  )
}

export default Footer
