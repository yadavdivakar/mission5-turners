import React from 'react';
import SideMenu from '../../components/styles/SideMenu/SideMenu';
import { StyledMain } from '../../components/styles/PageLayout/PageLayout.styled';
import ContentPanelContainer from '../ContentPanelContainer/ContentPanelContainer';
import Header from '../../components/styles/Header/Header';
import PageLayout from "../../components/styles/PageLayout/PageLayout";
import { StyledFooter } from '../../components/styles/PageLayout/PageLayout.styled';
const MakeProject = () => {
  return (
    <>
      <Header></Header>
      <PageLayout>
        <SideMenu></SideMenu>
        <StyledMain>
          <ContentPanelContainer>
            <div>LearningObjectives</div>
          </ContentPanelContainer>
        </StyledMain>
      </PageLayout >
      <StyledFooter></StyledFooter>
    </>
  )
}

export default MakeProject