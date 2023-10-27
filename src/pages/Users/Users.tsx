import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { Link, useLoaderData } from "react-router-dom";
import type { User } from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI";

const Users = () => {
  const users = useLoaderData() as User[];

  //console.log(users);

  return (<>
    <Typography variant='h5' gutterBottom>
      Users
    </Typography>
    <List>
      {users.map((user) => (
        <ListItem key={user.id} component={Link} to={`/users/${user.id}`}>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  </>
  )
}

export { Users }
