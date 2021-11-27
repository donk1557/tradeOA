import React from 'react'
import styled from 'styled-components'
import {Search} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import {ShoppingCartOutlined} from '@material-ui/icons'


const Container = styled.div`
    height: 60px;
`

const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex:1;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input/> 
                <Search/>
              </SearchContainer>
            </Left>
            <Center><Logo>TradeOA</Logo></Center>
            <Right>
              <MenuItem>Sign Up</MenuItem>
              <MenuItem>Log in</MenuItem>
              <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
              </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar
