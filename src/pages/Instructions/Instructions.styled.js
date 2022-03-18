import styled from "styled-components";

export const StyledHeaderDiv = styled.div`

    text-align: center;
    display:flex;
    flex-direction:column;
    
`

export const StyledBlockDivContainer = styled.div`
    display:flex;
    justify-content: center;
    
    @media (max-width: 1000px){
        flex-direction:column;
        
    }

`

export const StyledBlockDiv = styled.div`
    display:flex;
    flex-direction: row ;
    justify-content: center;

`

export const StyledLeftBlockDiv = styled.div`
    display:flex;
    flex-direction: row ;
`

export const ChildBlockDiv = styled.div`
    display:flex;
    flex-direction: column ;
`

export const BlockChildContainer = styled.div`
    display:flex;
    flex-direction: column ;
    
`
export const BlockParent = styled.div`
    display:flex;
    flex-direction: column ;
`