import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: lightblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight:500;
`

const Announcement =() => {
    return(
        <Container>
            Super cool deals! DON'T CATCH A COLD!!
        </Container>
    )
}

export default Announcement