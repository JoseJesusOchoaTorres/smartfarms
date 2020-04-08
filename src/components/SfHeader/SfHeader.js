import React from 'react'
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent
} from 'carbon-components-react/lib/components/UIShell'
import { Link } from 'react-router-dom'

const SfHeader = () => (
  <Header aria-label='Carbon Tutorial'>
    <SkipToContent />
    <HeaderName element={Link} to='/' prefix=''>
      SmartFarms
    </HeaderName>
    <HeaderNavigation aria-label='Sets'>
      <HeaderMenuItem element={Link} to='/sets'>
        Sets
      </HeaderMenuItem>
    </HeaderNavigation>
  </Header>
)

export default SfHeader
