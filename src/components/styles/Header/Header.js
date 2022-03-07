import React from 'react'
import { StyledHeader, StyledLogoContainer, StyledLeftHeaderGroup, StyledRightHeaderGroup, StyledButtonGroup, StyledButton, StyledFlagGroup, ProjectContainer, LevelsContainer,SmallDotImg } from './Header.styled'
// import starImg from "../../../images/Star Logo 07-2.png"
import { ReactComponent as HeaderLogo } from "../../../images/HeaderLogo.svg";
import { ReactComponent as ProjectHeader } from "../../../images/ProjectIntro.svg";
import OneSymbol from "../../../images/Ellipse 7.png";
import SmallDot  from "../../../images/Ellipse 9.png";
import { ReactComponent as NZFlag } from "../../../images/NZflag.svg";
import { ReactComponent as MaoriFlag } from "../../../images/MaoriFlag.svg";
const Header = () => {
  return (
    <StyledHeader>

      {/* <img src={starImg} color={'blue'}></img> */}
      <StyledLeftHeaderGroup>
        <StyledLogoContainer>
          <HeaderLogo></HeaderLogo>
        </StyledLogoContainer>

        <ProjectContainer>
          <ProjectHeader></ProjectHeader>
        </ProjectContainer>

        <LevelsContainer>
            <img src={OneSymbol}></img>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
            <SmallDotImg src={SmallDot}></SmallDotImg>
        </LevelsContainer>

      </StyledLeftHeaderGroup>
      <StyledRightHeaderGroup>
        <StyledButtonGroup>
          <StyledButton colorSet={"#E5AB2C"} >Take Screenshot</StyledButton>
          <StyledButton colorSet={"#F91C85"}>Ask Teacher for help</StyledButton>
          <StyledButton colorSet={"#43C0F6"}>More Projects</StyledButton>
        </StyledButtonGroup>

        <StyledFlagGroup>

          <NZFlag></NZFlag>
          <MaoriFlag></MaoriFlag>
        </StyledFlagGroup>
      </StyledRightHeaderGroup>

    </StyledHeader>
  )
}

export default Header;