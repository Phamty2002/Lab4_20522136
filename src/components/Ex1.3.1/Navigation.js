import "typeface-roboto";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import First from "./First";
import Second from "./Second";
import Third from "./Third";


export default function App({ links }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(!open);
  };

  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
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
          <Route path="/first" component={First} />
          <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
          <Route exact path="/" render={() => <div>Select a page</div>} />
        </Switch>
      </section>
    </Router>
  );
}
