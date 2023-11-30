// Import necessary libraries and components
import "typeface-roboto";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// Import the components for each route
import First from "./First";
import Second from "./Second";
import Third from "./Third";

export default function App() {
  const [open, setOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  // List of links for navigation
  const links = [
    { name: 'First', url: '/first' },
    { name: 'Second', url: '/second' },
    { name: 'Third', url: '/third' },
  ];

  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <Drawer open={open} onClose={toggleDrawer}>
        <div style={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            {links.map((link) => (
              <ListItem button key={link.url} component={Link} to={link.url}>
                <ListItemText primary={link.name} primaryTypographyProps={{ color: "primary" }} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <section>
        <Switch>
          <Route exact path="/first" component={First} />
          <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
          {/* Default route in case none of the above matches */}
          <Route exact path="/" render={() => <div>Select a page</div>} />
        </Switch>
      </section>
    </Router>
  );
}

App.defaultProps = {
  links: [
    {url: "/first", name: "First Page"},
    {url: "/second", name: "Second Page"},
    {url: "/third", name: "Third Page"},
  ],
};
