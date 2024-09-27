import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Menu = () => {
  const menuItems = [
    { category: 'Pizzas', items: ['Margherita', 'Pepperoni', 'Veggie Supreme'] },
    { category: 'Pastas', items: ['Spaghetti Bolognese', 'Alfredo'] },
  ];

  return (
    <div>
      {menuItems.map((menu, index) => (
        <div key={index}>
          <Typography variant="h6">{menu.category}</Typography>
          <List>
            {menu.items.map((item, i) => (
              <ListItem key={i}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </div>
  );
};

export default Menu;

