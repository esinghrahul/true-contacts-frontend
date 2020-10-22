import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Icon, Image, Menu } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Menu secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
        True Contacts
      </Menu.Item>
      {pathname === '/' && (<><Menu.Item position="right">
        <Button as={Link} to="/contacts/create" primary basic icon>
          <Icon name="add user">Create Contact</Icon>
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button color="red" basic icon>
          <Icon name="log out">Logout</Icon>
        </Button>
      </Menu.Item></>)}
    </Menu>
  );
};

export default Header;
