import React, { Component } from 'react'
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  SkipToContent
} from 'carbon-components-react/lib/components/UIShell'
import { Link } from 'react-router-dom'

class SfHeader extends Component {

  constructor () {
    super ()
    this.state = {
      activeItem: {},
      activeSubItem: {}
      // TODO: Set the state with the items out of the url
    }
  }
  menuItems = [
    {
      type: 'HeaderMenu',
      text: 'Entrenar',
      subItems: [
        {
          type: 'HeaderMenuItem',
          text: 'Añadir',
          link: '/upload'
        },
        // {
        //   type: 'HeaderMenuItem',
        //   text: 'Entrenar',
        //   link: '/not-yet'
        // },
        {
          type: 'HeaderMenuItem',
          text: 'Ver',
          link: '/sets'
        },
      ]
    },
    {
      type: 'HeaderMenu',
      text: 'Analizar',
      subItems: [
        {
          type: 'HeaderMenuItem',
          text: 'Añadir',
          link: '/upload'
        },
        // {
        //   type: 'HeaderMenuItem',
        //   text: 'Entrenar',
        //   link: '/not-yet'
        // },
        {
          type: 'HeaderMenuItem',
          text: 'Ver',
          link: '/sets'
        },
      ]
    }    
  ]

  handleClick = (item, subItem) => {
    this.setState({activeItem: item})
    this.setState({activeSubItem: subItem})
  }

  render () {
    return (
      <Header aria-label='Carbon Tutorial'>
        <SkipToContent />
        <HeaderName element={Link} to='/' prefix=''>
          SmartFarms
        </HeaderName>
        <HeaderNavigation aria-label='SmartFarms Menu'>
          {this.menuItems.map(item => {
            if(item.type === 'HeaderMenu'){
              return(
                <HeaderMenu aria-label={item.text} menuLinkName={item.text} className={item === this.state.activeItem ? 'active' : ''}>
                  {item.subItems.map(subItem => {
                    return(
                      <HeaderMenuItem element={Link} to={subItem.link} className={subItem === this.state.activeSubItem ? 'active' : ''} onClick={this.handleClick.bind(this, item, subItem)} >{subItem.text}</HeaderMenuItem>
                    )
                  })}
                </HeaderMenu>
              )
          }
          })}
        </HeaderNavigation>
      </Header>
    )
  }
}

export default SfHeader
