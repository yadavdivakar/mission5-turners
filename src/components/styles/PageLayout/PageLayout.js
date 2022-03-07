import React from 'react'
import { StyledLayout } from './PageLayout.styled'
import RoutesPaths from '../../../RoutesPaths'
const PageLayout = () => {
  return (
    <>
      <StyledLayout>
        <RoutesPaths>
        </RoutesPaths>
      </StyledLayout>
      <footer>
        <p>Test</p>
      </footer>
    </>
  )
}

export default PageLayout