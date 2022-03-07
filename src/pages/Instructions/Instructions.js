import React from 'react'
import ContentPanelContainer from '../ContentPanelContainer/ContentPanelContainer';
import { StyledHeaderDiv, StyledBlockDivContainer, StyledBlockDiv, StyledLeftBlockDiv, ChildBlockDiv, BlockChildContainer, BlockParent } from './Instructions.styled';
import { ReactComponent as CBlockSVG } from "../../images/ControlBlocks.svg";
import { ReactComponent as LBlockSVG } from "../../images/LookBlocks.svg";
import { ReactComponent as LBlockChild1SVG } from "../../images/LBlockChild1.svg";
import { ReactComponent as LBlockChild2SVG } from "../../images/LBlockChild2.svg";
import { ReactComponent as MBlockSVG } from "../../images/MotionBlocks.svg";
import { ReactComponent as CBlockChild1SVG} from "../../images/CBlockChild1.svg";
import { ReactComponent as MBlockChildSVG} from "../../images/MBlockChild1.svg";
const Instructions = () => {
  return (
   
    <ContentPanelContainer>
      <StyledHeaderDiv>
        <h1>Explore Scratch blocks</h1>
        <p>Learn the basic function of some basic scratch block as as "say", "wait", "go to" and "hide."</p>
      </StyledHeaderDiv>
      <StyledBlockDivContainer>
        <BlockParent>
          <p>Look Blocks</p>
          <StyledBlockDiv>
            <LBlockSVG></LBlockSVG>
            <BlockChildContainer>
              <LBlockChild1SVG></LBlockChild1SVG>
              <LBlockChild2SVG></LBlockChild2SVG>
            </BlockChildContainer>
          </StyledBlockDiv>
        </BlockParent>

        <BlockParent>
          <p>Control Blocks</p>
          <StyledBlockDiv>
            <CBlockSVG></CBlockSVG>
            <BlockChildContainer>
              <CBlockChild1SVG></CBlockChild1SVG>
              
            </BlockChildContainer>
          </StyledBlockDiv>
        </BlockParent>

        <BlockParent>
          <p>Motion Blocks</p>
          <StyledBlockDiv>
            <MBlockSVG></MBlockSVG>
            <BlockChildContainer>
              <MBlockChildSVG></MBlockChildSVG>

            </BlockChildContainer>
          </StyledBlockDiv>
        </BlockParent>

      </StyledBlockDivContainer>
    </ContentPanelContainer>

  )
}

export default Instructions;