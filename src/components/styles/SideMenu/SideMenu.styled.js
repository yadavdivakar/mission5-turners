import styled from "styled-components";


export const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column ;
    position: relative;
    height: calc(100vh - 50px);
    width: auto;
    background-color: blue;

    p{
        margin: 0;
    }

    
`
export const StyledSideBarButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink ;
    height: 5%;
    cursor: pointer;
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
`