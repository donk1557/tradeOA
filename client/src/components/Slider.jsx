import styled from "styled-components"
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons"
import { useState } from "react";

const Container = styled.div`
    width:100%
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"}
    right: ${props=>props.direction === "right" && "10px"}
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transform: translateX(0vw)
`;
const Slide = styled.div`
    display: flex;
    align-items: center;
    width:100vw;
    height: 100vh;
    background-color: #${props=> props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;

    flex:1;
`;
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size:20px;
    letter-spacing:3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    curser: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex]= useState(0)
    const handleClick = (direction) => {

    };
    return (
        <Container>
            <Arrow direction = "left" onClick= {()=>handleClick("left")}>
                <ArrowLeftOutlined/>
                </Arrow>
                <Wrapper> 
                    <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src ="https://i.ibb.co/xsdmR2c/1.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SALE</Title>
                        <Desc>TAKE PART</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                    </Slide>
                    <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image src ="https://i.ibb.co/xsdmR2c/1.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SALE</Title>
                        <Desc>TAKE PART</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                    </Slide>
                    <Slide bg="fbf0f4" >
                    <ImgContainer>
                        <Image src ="https://i.ibb.co/xsdmR2c/1.png"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SALE</Title>
                        <Desc>TAKE PART</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                    </Slide>
                </Wrapper>
                <Arrow direction = "right"onClick= {()=>handleClick("right")} >
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}