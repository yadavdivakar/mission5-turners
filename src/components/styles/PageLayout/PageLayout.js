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
        <footer>
          <p>Test</p>
        </footer>
    </>
  )
}

export default PageLayout