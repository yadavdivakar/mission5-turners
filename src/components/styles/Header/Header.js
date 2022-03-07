import React from 'react'
import { StyledHeader, StyledLogoContainer, StyledLeftHeaderGroup, StyledRightHeaderGroup, StyledButtonGroup,StyledButton,StyledFlagGroup } from './Header.styled'
// import starImg from "../../../images/Star Logo 07-2.png"
import { ReactComponent as HeaderLogo } from "../../../images/HeaderLogo.svg";
const Header = () => {
  return (
    <StyledHeader>
      {/* <img src={starImg} color={'blue'}></img> */}
      <StyledLeftHeaderGroup>
        <StyledLogoContainer><HeaderLogo></HeaderLogo></StyledLogoContainer>
      </StyledLeftHeaderGroup>
      <StyledRightHeaderGroup>
        <StyledButtonGroup>
          <StyledButton ></StyledButton>
          <StyledButton ></StyledButton>
          <StyledButton ></StyledButton>
        </StyledButtonGroup>

        <StyledFlagGroup>

        </StyledFlagGroup>
      </StyledRightHeaderGroup>

    </StyledHeader>
  )
}

export default Header;