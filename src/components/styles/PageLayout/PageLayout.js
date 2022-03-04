import React from 'react'
import SideMenu from '../SideMenu/SideMenu'
import { StyledSideBar } from '../SideMenu/SideMenu.styled'
import { StyledLayout, StyledMain} from './PageLayout.styled'

const PageLayout = ({children}) => {
  return (
    <>
        <StyledLayout>
            <SideMenu></SideMenu>
            <StyledMain>{children}</StyledMain>
        </StyledLayout>
    </>
  )
}

export default PageLayout