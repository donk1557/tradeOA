import React from "react";

const Container = styled.div``
const title = styled.h1``
const Desc = styled.div``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``

const Newsletter =()=> {
    
    return (
        <Container>
            <title>
                Newsletter
            </title>
            <Desc></Desc>
            <InputContainer>
                <Input></Input>
                <button>
                    <Send/>
                </button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter