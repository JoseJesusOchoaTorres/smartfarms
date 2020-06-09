import React, { Component } from "react";
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  SkipToContent,
  SideNavLink,
} from "carbon-components-react/lib/components/UIShell";
import { Link } from "react-router-dom";

class SfHeader extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: {},
      activeSubItem: {},
      isSideNavExpanded: false,
      // TODO: Set the state with the items out of the url
    };
  }
  menuItems = [
    {
      text: "Ver",
      link: "/sets",
    },
    {
      text: "Analizar",
      link: "/upload",
    },
  ];

  handleClick = item => {
    this.setState({isSideNavExpanded: !this.state.isSideNavExpanded});
    document.querySelector(".hambuguer-icon").focus();
  };

  onClickSideNavExpand = () => {
    this.setState({ isSideNavExpanded: !this.state.isSideNavExpanded });
  };

  render() {
    return (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={this.onClickSideNavExpand}
          isActive={this.state.isSideNavExpanded}
          className="hambuguer-icon"
        />
        <HeaderName element={Link} to="/" prefix="">
          SmartFarms
        </HeaderName>
        <HeaderNavigation aria-label="SmartFarms Menu">
          {this.menuItems.map((item) => {
            return (
              <HeaderMenuItem
                key={item.text}
                aria-label={item.text}
                element={Link}
                to={item.link}
              >
                {item.text}
              </HeaderMenuItem>
            );
          })}
        </HeaderNavigation>
        <SideNav
          className="hide-lg"
          aria-label="Side navigation"
          expanded={this.state.isSideNavExpanded}
        >
          <SideNavItems>
            {this.menuItems.map((item) => {
              return (
                <SideNavLink
                  key={"sidebar-" + item.text}
                  element={Link}
                  to={item.link}
                  aria-current="page"
                  onClick={this.handleClick.bind(this, item)}
                >
                  {item.text}
                </SideNavLink>
              );
            })}
          </SideNavItems>
        </SideNav>
      </Header>
    );
  }
}

export default SfHeader;
