import styled from "styled-components"
import {ShoppingCartOutlined} from '@material-ui/icons'
import {Search} from '@material-ui/icons'
import {FavoriteBorderOutlinedIcon} from '@material-ui/icons'

const Container = styled.div`
  flex: 1
  margin: 5px;
`
const Circle = styled.div``

const Image = styled.div``

const Info = styled.div``

const Icon = styled.div``

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <Search/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
