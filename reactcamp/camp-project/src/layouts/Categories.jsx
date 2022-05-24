import React from "react";
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Link to='/cart'>
          <Menu.Item
            name="home"
          />
        </Link>
        
        <Menu.Item
          name="messages"
        />
        <Menu.Item
          name="friends"
        />
      </Menu>
    </div>
  );
}
