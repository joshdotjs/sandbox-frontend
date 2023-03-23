import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

// ==============================================

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

// ==============================================

export default function CarsTable({ cars }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {cars.length > 0 &&
          cars.map(({ id, name }) => {
            return (
              <React.Fragment key={id}>
                <ListItem button>
                  <ListItemText primary={id} />
                  <ListItemText primary={name} />
                  {/* <ListItemText primary={last_name} /> */}
                  {/* <ListItemText primary={username} /> */}
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
      </List>
    </div>
  );
}
