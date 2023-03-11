import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

// ==============================================

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper"
};

// ==============================================

export default function Users({ users }) {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {users.length > 0 &&
        users.map(({ id, name }) => {
          return (
            <React.Fragment key={id}>
              <ListItem button>
                <ListItemText primary={name} />
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
    </List>
  );
}
