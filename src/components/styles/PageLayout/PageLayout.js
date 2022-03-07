import React from 'react'
import { StyledLayout,StyledFooter } from './PageLayout.styled'
import RoutesPaths from '../../../RoutesPaths'
const PageLayout = () => {
  return (
    <>
      <StyledLayout>
        <RoutesPaths>
        </RoutesPaths>
      </StyledLayout>
      <StyledFooter>
        <p>&copy; LevelUp Works 2020</p>
      </StyledFooter>
    </>
  )
}

export default PageLayout