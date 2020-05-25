import React, { Component } from 'react'
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  SideNavLink
} from 'carbon-components-react/lib/components/UIShell'
import { Link } from 'react-router-dom'

class SfHeader extends Component {

  constructor () {
    super ()
    this.state = {
      activeItem: {},
      activeSubItem: {},
      isSideNavExpanded: false
      // TODO: Set the state with the items out of the url
    }
  }
  menuItems = [
    {
      type: 'HeaderMenu',
      text: 'Entrenar',
      subItems: [
        // {
        //   type: 'HeaderMenuItem',
        //   text: 'Añadir',
        //   link: '/upload'
        // },
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
          text: 'Analizar',
          link: '/upload'
        },
        // {
        //   type: 'HeaderMenuItem',
        //   text: 'Entrenar',
        //   link: '/not-yet'
        // },
        // {
        //   type: 'HeaderMenuItem',
        //   text: 'Ver',
        //   link: '/sets'
        // },
      ]
    }    
  ]

  handleClick = (item, subItem) => {
    this.setState({
      activeItem: item,
      activeSubItem: subItem
    })
    
    // This is needed to close the left menu
    this.setState({
      isSideNavExpanded: !this.state.isSideNavExpanded // Change the state for the menu
    })
    document.querySelector('.hambuguer-icon').focus() // Change the focus lets it close
  }

  onClickSideNavExpand = () => {    
    this.setState({isSideNavExpanded: !this.state.isSideNavExpanded}) 
  }

  render () {
    return (
      <Header aria-label='Carbon Tutorial'>
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={this.onClickSideNavExpand}
          isActive={this.state.isSideNavExpanded}
          className=" hambuguer-icon"
        />
        <HeaderName element={Link} to='/' prefix=''>
          SmartFarms
        </HeaderName>
        <HeaderNavigation aria-label='SmartFarms Menu'>
          {this.menuItems.map(item => {
            if(item.type === 'HeaderMenu'){
              return(
                <HeaderMenu key={item.text} aria-label={item.text} menuLinkName={item.text} className={item === this.state.activeItem ? 'active' : ''}>
                  {item.subItems.map(subItem => {
                    return(
                      <HeaderMenuItem key={item.text+subItem.text} element={Link} to={subItem.link} className={subItem === this.state.activeSubItem ? 'active' : ''} onClick={this.handleClick.bind(this, item, subItem)} >{subItem.text}</HeaderMenuItem>
                    )
                  })}
                </HeaderMenu>
              )
            } else {
              return <></>
            }
            
          })}
        </HeaderNavigation>

        <SideNav className='hide-lg' aria-label='Side navigation' expanded={this.state.isSideNavExpanded}>
          <SideNavItems>
            {this.menuItems.map(item => {
              if(item.type === 'HeaderMenu'){
                return(
                  <SideNavMenu key={item.text} title={item.text}>
                    {item.subItems.map(subItem => {
                      return(
                        <SideNavLink key={'sidebar-'+item.text+subItem.text} element={Link} to={subItem.link} href="javascript:void(0)" aria-current={subItem === this.state.activeSubItem ? 'page' : ''} onClick={this.handleClick.bind(this, item, subItem)} >{subItem.text}</SideNavLink>
                      )
                    })}
                  </SideNavMenu>
                )
              } else {
                return <></>
              }
            })}
          </SideNavItems>
        </SideNav>
      </Header>
    )
  }
}

export default SfHeader
