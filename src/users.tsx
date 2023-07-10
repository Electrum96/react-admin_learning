import {Datagrid, EmailField, List, TextField} from 'react-admin';
import {SimpleList} from 'react-admin';
import {useMediaQuery} from '@mui/material'; // отслеживает совпадения с медиа-запросом

export const UserList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            
            {isSmall ? (<SimpleList
                    primaryText={(record) => record.name} 
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}/>
                    ) : (
                    <Datagrid rowClick="edit">
                        <TextField source="id"/>
                        <TextField source="name"/>
                        <TextField source="username"/>
                        <EmailField source="email"/>
                        <TextField source="address.street"/>
                        <TextField source="phone"/>
                        <TextField source="website"/>
                        <TextField source="company.name"/>
                    </Datagrid>

                )} 
                
        </List>
    );

}; //внутри условие, в зависимости от значения isSmall рендерится компонент для десктопной или мобильной версии