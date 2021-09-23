import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const HeadMenu = () => {
    const [activeItem, setActiveItem] = useState('/')
    const handleItemClick = (event, {name}) => {
        console.log(name);
        setActiveItem(name);
    }
    return(
        <Menu secondary>
            <Menu.Item
              as={Link} to='/'
              name='home'
              active={activeItem === 'home'}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={Link} to='/categories'
              name='Categories' 
              active={activeItem === 'categories'}
              onClick={handleItemClick}
            />
            {/*                
            <Menu.Item 
              as={Link} to='/songs'
              name='messages'
              active={activeItem === 'messages'}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={Link} to='/albums'
              name='friends' 
              active={activeItem === 'friends'}
              onClick={handleItemClick}
            />
            
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={handleItemClick}
              />
            </Menu.Menu>
            */}
        </Menu>
    )
}


export default HeadMenu;