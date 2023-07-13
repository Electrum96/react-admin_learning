import {Datagrid, EmailField, List, TextField} from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website"/>
            <TextField source="company.name" />
        </Datagrid>
                
        </List>
    );

}; //внутри условие, в зависимости от значения isSmall рендерится компонент для десктопной или мобильной версии