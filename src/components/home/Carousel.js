import React from 'react';
import {
    CarouselBackground,
    CarouselInnerContainer,
    ContainerContents,
    ContainerHeader,
    LeftContainer,
    RightContainer,
    BlueButton,
    ButtonContainer,
    ContainerSecondaryHeader,
    ButtonImage,
} from './styles/Carousel.styles';
import Animation from '../../images/Home/frame copy.png';
import Games from '../../images/Home/joystick copy.png';
import Chatbots from '../../images/Home/robotic copy.png';
import AugmentedReality from '../../images/Home/augmented-reality copy.png';

function Carousel() {
    return (
        <CarouselBackground>
            <CarouselInnerContainer>
                <LeftContainer>
                    <ContainerHeader>What We Offer</ContainerHeader>
                    <ContainerContents>
                        The Creative Problem Solving programme is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealands leading IT industry experts and schools.
                    </ContainerContents>
                    <ContainerSecondaryHeader>What will students create?</ContainerSecondaryHeader>
                    <ButtonContainer>
                        <BlueButton>
                            <ButtonImage src= {Animation} />
                            Animation</BlueButton>
                        <BlueButton>
                            <ButtonImage src= {Games} />
                            Games</BlueButton>
                        <BlueButton>
                            <ButtonImage src= {Chatbots} />
                            Chatbots</BlueButton>
                        <BlueButton>
                            <ButtonImage src= {AugmentedReality}/>
                            Augmented Reality</BlueButton>
                    </ButtonContainer>
                </LeftContainer>
                <RightContainer>
                </RightContainer>
            </CarouselInnerContainer>
        </CarouselBackground>
    );
}

export default Carousel;