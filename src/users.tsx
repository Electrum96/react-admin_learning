import {Datagrid, EmailField, List, TextField} from 'react-admin';
import MyUrlField from './MyUrlField';
import {Avatar} from "@mui/material"

export const UserList = () => {
    
    return (
        <List sx={{bgcolor:'rosyBrown'}}>
            <Datagrid rowClick="edit">
            <TextField source="id" />
            <Avatar src="/static/images/avatar/1.jpg" sx={{wight:24, height:40, bgcolor:'pink'}} />
            <TextField source="username" sx={{fontSize:20, fontFamily:"Roboto", fontWeight:600}} />
            <EmailField source="email" />
            <TextField source="phone"  />
            <MyUrlField source="website"/>
            <TextField source="company.name" />
        </Datagrid>
                
        </List>
    );

}; 