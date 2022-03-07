import React from 'react'
import { StyledContentPanel } from './StyledContentPanelContainer'
const ContentPanelContainer = ({children}) => {
  return (
    <>
      <StyledContentPanel>
          {children}
      </StyledContentPanel>
    </>
  )
}

export default ContentPanelContainer