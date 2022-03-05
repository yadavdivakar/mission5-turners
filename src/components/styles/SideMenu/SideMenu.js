import React from 'react';
import { StyledSideBar, StyledSideBarButton, StyledParentDiv, StyledLinkIcon } from './SideMenu.styled';
import { useState } from 'react';
import { ReactComponent as LearningObjectivesSVG } from "../../../images/Target.svg";
import { ReactComponent as InstructionsSVG } from "../../../images/InstructionsIcon.svg";
import { ReactComponent as VideoSVG } from "../../../images/VideoTutorial.svg";
import { ReactComponent as MakeProjectSVG } from "../../../images/MakeProject.svg";
import { ReactComponent as SubmitSVG } from "../../../images/Submit.svg";
import { ReactComponent as BonusChallengeSVG } from "../../../images/Medal.svg";
import { ReactComponent as TakeQuizSVG } from "../../../images/NotePad.svg";

const SideMenu = () => {

  const [Open, SetOpen] = useState(true);
  const handleOpenCloseState = () => {
    SetOpen(!Open);
  }
  return (
    <>
      <StyledSideBar>
        {Open && (
          <>
            {
              MenuItems.map(({ text, icon }) => (

                <StyledParentDiv key={text}>
                  <StyledLinkIcon>{icon}</StyledLinkIcon>
                  <p>{text}</p>
                </StyledParentDiv>
              )

              )
            }


          </>
        )}
        {!Open && (
          <>
            <StyledParentDiv>
              <LearningObjectivesSVG width={'55'} height={'55'}></LearningObjectivesSVG>
            </StyledParentDiv>
            <StyledParentDiv>
              <InstructionsSVG width={'55'} height={'55'}></InstructionsSVG>
            </StyledParentDiv>
            <StyledParentDiv>
              <VideoSVG width={'55'} height={'55'}></VideoSVG>
            </StyledParentDiv>
            <StyledParentDiv>
              <MakeProjectSVG width={'55'} height={'55'}></MakeProjectSVG>
            </StyledParentDiv>
            <StyledParentDiv>
              <SubmitSVG width={'55'} height={'55'}></SubmitSVG>
            </StyledParentDiv>
            <StyledParentDiv>
              <BonusChallengeSVG width={'55'} height={'55'}></BonusChallengeSVG>
            </StyledParentDiv>
            <StyledParentDiv>
              <TakeQuizSVG width={'55'} height={'55'}></TakeQuizSVG>
            </StyledParentDiv>
          </>

        )}

        <button onClick={handleOpenCloseState}>Click me</button>


      </StyledSideBar>
    </>
  )
}

const MenuItems = [
  { text: "LEARNING OBJECTIVES", icon: <LearningObjectivesSVG /> },
  { text: "INSTRUCTIONS", icon: <InstructionsSVG /> },
  { text: "VIDEO TUTORIAL", icon: <VideoSVG /> },
  { text: "MAKE PROJECT", icon: <MakeProjectSVG /> },
  { text: "SUBMIT PROJECT", icon: <SubmitSVG /> },
  { text: "BONUS CHALLENGE", icon: <BonusChallengeSVG /> },
  { text: "TAKE THE QUIZ", icon: <TakeQuizSVG /> },
]





export default SideMenu;