import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructions from "./pages/Instructions/Instructions";
import LearningObjectives from "./pages/LearningObjectives/LearningObjectives";
import MakeProject from "./pages/MakeProject/MakeProject";
import SubmitProject from "./pages/SubmitProject/SubmitProject";
import VideoTutorial from "./pages/VideoTutorial/VideoTutorial";
import SideMenu from "./components/styles/SideMenu/SideMenu";

import { StyledMain } from "./components/styles/PageLayout/PageLayout.styled";
const RoutesPaths = () => {
    return (
        <BrowserRouter>
            <SideMenu></SideMenu>
            <StyledMain>
                    <Routes>
                        <Route path="/instructions" element={<Instructions />}> </Route>
                        <Route path="/objectives" element={<LearningObjectives />}> </Route>
                        <Route path="/makeproject" element={<MakeProject />}> </Route>
                        <Route path="/submitproject" element={<SubmitProject />}> </Route>
                        <Route path="/videotutorial" element={<VideoTutorial />}> </Route>
                    </Routes>
                    
            </StyledMain>

        </BrowserRouter>
    )

}

export default RoutesPaths;