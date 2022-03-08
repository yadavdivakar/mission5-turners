import React from "react";
import {
  StyledSideBar,
  StyledSideBarButton,
  StyledParentDiv,
  StyledLinkIcon,
  StyledAdContainer,
  StyledSettingsSVG,
  StyledSideBarButtonContainer,
  StyledLink,
  MobileContainer,
  MenuItemsContainer
} from "./SideMenu.styled";
import { useState } from "react";
import { ReactComponent as LearningObjectivesSVG } from "../../../images/Target.svg";
import { ReactComponent as InstructionsSVG } from "../../../images/InstructionsIcon.svg";
import { ReactComponent as VideoSVG } from "../../../images/VideoTutorial.svg";
import { ReactComponent as MakeProjectSVG } from "../../../images/MakeProject.svg";
import { ReactComponent as SubmitSVG } from "../../../images/Submit.svg";
import { ReactComponent as BonusChallengeSVG } from "../../../images/Medal.svg";
import { ReactComponent as TakeQuizSVG } from "../../../images/NotePad.svg";
import { ReactComponent as ProfileSVG } from "../../../images/Logout.svg";
import { ReactComponent as SettingsSVG } from "../../../images/Settings.svg";
import { ReactComponent as LogoutSVG } from "../../../images/Logout.svg";
import { ReactComponent as AdSVG } from "../../../images/Advertisement.svg";
import { ReactComponent as TriangleArrowSVG } from "../../../images/Triangle.svg";
// import { Link } from 'react-router-dom';
const SideMenu = () => {
  const [Open, SetOpen] = useState(true);
  const handleOpenCloseState = () => {
    SetOpen(!Open);
  };

  return (
    <>
      <StyledSideBar>
        {Open && (
          <>
            <>
              <MenuItemsContainer>
                {MenuItems.map(({ text, icon, pathstring }) => (
                  <StyledParentDiv key={text}>
                    <StyledLink to={pathstring}>
                      <StyledLinkIcon>{icon}</StyledLinkIcon>
                      <p>{text}</p>
                    </StyledLink>
                  </StyledParentDiv>
                ))}
              </MenuItemsContainer>

              <StyledSideBarButtonContainer>
                <StyledSideBarButton
                  onClick={handleOpenCloseState}
                  isOpen={Open}
                >
                  <TriangleArrowSVG></TriangleArrowSVG>
                </StyledSideBarButton>
              </StyledSideBarButtonContainer>

              <StyledAdContainer>
                <AdSVG />
              </StyledAdContainer>

              <StyledSettingsSVG>
                <ProfileSVG />
                <SettingsSVG />
                <LogoutSVG />
              </StyledSettingsSVG>
            </>

            <>
              <MobileContainer>
                <StyledParentDiv>
                  <LearningObjectivesSVG
                    width={SVGwidth}
                    height={SVGHeight}
                  ></LearningObjectivesSVG>
                </StyledParentDiv>
                <StyledParentDiv>
                  <InstructionsSVG
                    width={SVGwidth}
                    height={SVGHeight}
                  ></InstructionsSVG>
                </StyledParentDiv>
                <StyledParentDiv>
                  <VideoSVG width={SVGwidth} height={SVGHeight}></VideoSVG>
                </StyledParentDiv>
                <StyledParentDiv>
                  <MakeProjectSVG
                    width={SVGwidth}
                    height={SVGHeight}
                  ></MakeProjectSVG>
                </StyledParentDiv>
                <StyledParentDiv>
                  <SubmitSVG width={SVGwidth} height={SVGHeight}></SubmitSVG>
                </StyledParentDiv>
                <StyledParentDiv>
                  <BonusChallengeSVG
                    width={SVGwidth}
                    height={SVGHeight}
                  ></BonusChallengeSVG>
                </StyledParentDiv>
                <StyledParentDiv>
                  <TakeQuizSVG
                    width={SVGwidth}
                    height={SVGHeight}
                  ></TakeQuizSVG>
                </StyledParentDiv>
              </MobileContainer>
            </>
          </>
        )}
        {!Open && (
          <>
            <MenuItemsContainer>
              <StyledParentDiv>
                <LearningObjectivesSVG
                  width={SVGwidth}
                  height={SVGHeight}
                ></LearningObjectivesSVG>
              </StyledParentDiv>
              <StyledParentDiv>
                <InstructionsSVG
                  width={SVGwidth}
                  height={SVGHeight}
                ></InstructionsSVG>
              </StyledParentDiv>
              <StyledParentDiv>
                <VideoSVG width={SVGwidth} height={SVGHeight}></VideoSVG>
              </StyledParentDiv>
              <StyledParentDiv>
                <MakeProjectSVG
                  width={SVGwidth}
                  height={SVGHeight}
                ></MakeProjectSVG>
              </StyledParentDiv>
              <StyledParentDiv>
                <SubmitSVG width={SVGwidth} height={SVGHeight}></SubmitSVG>
              </StyledParentDiv>
              <StyledParentDiv>
                <BonusChallengeSVG
                  width={SVGwidth}
                  height={SVGHeight}
                ></BonusChallengeSVG>
              </StyledParentDiv>
              <StyledParentDiv>
                <TakeQuizSVG width={SVGwidth} height={SVGHeight}></TakeQuizSVG>
              </StyledParentDiv>
            </MenuItemsContainer>
            <StyledSideBarButtonContainer>
              <StyledSideBarButton onClick={handleOpenCloseState} isOpen={Open}>
                <TriangleArrowSVG></TriangleArrowSVG>
              </StyledSideBarButton>
            </StyledSideBarButtonContainer>
          </>
        )}
      </StyledSideBar>
    </>
  );
};
const SVGHeight = 33;
const SVGwidth = 33;
const MenuItems = [
  {
    text: "LEARNING OBJECTIVES",
    icon: <LearningObjectivesSVG />,
    pathstring: "/objectives",
  },
  {
    text: "INSTRUCTIONS",
    icon: <InstructionsSVG />,
    pathstring: "/instructions",
  },
  { text: "VIDEO TUTORIAL", icon: <VideoSVG />, pathstring: "tutorial" },
  { text: "MAKE PROJECT", icon: <MakeProjectSVG />, pathstring: "makeproject" },
  { text: "SUBMIT PROJECT", icon: <SubmitSVG />, pathstring: "/" },
  { text: "BONUS CHALLENGE", icon: <BonusChallengeSVG />, pathstring: "/" },
  { text: "TAKE THE QUIZ", icon: <TakeQuizSVG />, pathstring: "/" },
];

export default SideMenu;