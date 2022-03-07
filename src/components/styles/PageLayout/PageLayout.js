import React from 'react'
import SideMenu from '../SideMenu/SideMenu'
import { StyledSideBar } from '../SideMenu/SideMenu.styled'
import { StyledLayout, StyledMain, StyledContentPane } from './PageLayout.styled'

const PageLayout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <SideMenu></SideMenu>
        <StyledMain>
          <StyledContentPane>{children}</StyledContentPane>
        </StyledMain>
      </StyledLayout>
      <footer>
        <p>Test</p>
      </footer>
    </>
  )
}

export default PageLayout