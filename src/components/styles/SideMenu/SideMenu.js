import React from 'react';
import { StyledSideBar,StyledSideBarButton } from './SideMenu.styled';
import { useState } from 'react';
const SideMenu = () => {

  const [Open, SetOpen] = useState(true);

  return (
    <>
        <StyledSideBar>

        </StyledSideBar>
    </>
  )
}

export default SideMenu;