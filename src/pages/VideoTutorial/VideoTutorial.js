
import React from 'react'
import SideMenu from '../../components/styles/SideMenu/SideMenu';
import { StyledMain } from '../../components/styles/PageLayout/PageLayout.styled';
import ContentPanelContainer from '../ContentPanelContainer/ContentPanelContainer';
import PageLayout from "../../components/styles/PageLayout/PageLayout";
import Header from '../../components/styles/Header/Header';
import { StyledFooter } from '../../components/styles/PageLayout/PageLayout.styled';
const VideoTutorial = () => {
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

export default VideoTutorial