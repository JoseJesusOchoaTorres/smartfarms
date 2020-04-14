import React from 'react'
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
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
      <HeaderMenu aria-label="Entrenar" menuLinkName="Entrenar">
        <HeaderMenuItem element={Link} to='/upload'>Añadir</HeaderMenuItem>
        {/* <HeaderMenuItem href="#">Entrenar</HeaderMenuItem> */}
        <HeaderMenuItem element={Link} to='/sets'>Ver</HeaderMenuItem>
      </HeaderMenu>
      {/* <HeaderMenu aria-label="Analizar" menuLinkName="Analizar">
        <HeaderMenuItem href="#">Añadir</HeaderMenuItem>
        <HeaderMenuItem href="#">Analizar</HeaderMenuItem>
        <HeaderMenuItem href="#">Ver</HeaderMenuItem>
      </HeaderMenu> */}
    </HeaderNavigation>
  </Header>
)

export default SfHeader
