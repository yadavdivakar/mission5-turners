import styled from "styled-components";
import {Link}  from "react-router-dom";

export const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column ;
    position: relative;
    width: auto;
    background-color: #43C0F6;
    height: 100%;
    overflow: auto;
    justify-content:  ${( {isOpen}) => (isOpen ? 'space-between' : '')} ;
    p{
        margin: 0;
        font-size: 10px ;
        color: white;
        font-weight: 900;
        
    }   
   
 
`

export const StyledSideBarButtonContainer = styled.div`
    display:flex;
    
    width: 100%;
    min-height: 50px;
        
`


export const StyledSideBarButton = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B2E4FA ;
    min-height: 50px;
    width: 40px;
    cursor: pointer;
    transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : `rotate(0)`)};
    border-top-right-radius: ${( {isOpen}) => (isOpen ? '10px' : '10px')};
    border-bottom-right-radius: ${( {isOpen}) => (isOpen ? '10px' : '10px')};
    left: ${( {isOpen}) => (!isOpen ? '0' : '')};
    

`

export const StyledMenuContainer = styled.div`
    display:flex;
    justify-content: flex-start ;
`

export const StyledParentDiv = styled.div`
    display:flex;
    padding: 15px;
    align-items: center ;
`

export const StyledLinkIcon = styled.div`
    display:flex;
    margin-right: 5px;
`

export const StyledAdContainer = styled.div`
    display:flex;
    padding: 10px;
`

export const StyledSettingsSVG = styled.div`
    padding: 10px 0;
    display:flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly ;
`

export const StyledLink = styled(Link)`
    list-style: none ;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
`