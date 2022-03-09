import React from 'react'
import SideMenu from "../../components/styles/SideMenu/SideMenu";
import ContentPanelContainer from "../ContentPanelContainer/ContentPanelContainer";
import { StyledMain } from '../../components/styles/PageLayout/PageLayout.styled';
import PageLayout from "../../components/styles/PageLayout/PageLayout";
import Header from '../../components/styles/Header/Header';
import { StyledFooter } from '../../components/styles/PageLayout/PageLayout.styled';
const LearningObjectives = () => {
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

export default LearningObjectives