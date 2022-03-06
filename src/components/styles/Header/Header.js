import React from 'react'
import { StyledHeader,StyledLogoContainer } from './Header.styled'
// import starImg from "../../../images/Star Logo 07-2.png"
import {ReactComponent as HeaderLogo} from "../../../images/HeaderLogo.svg";
const Header = () => {
  return (
    <StyledHeader>
      {/* <img src={starImg} color={'blue'}></img> */}
      <StyledLogoContainer><HeaderLogo></HeaderLogo></StyledLogoContainer>
      
    </StyledHeader>
  )
}

export default Header;