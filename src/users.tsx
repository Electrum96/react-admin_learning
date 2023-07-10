import { Datagrid, EmailField, List, TextField } from 'react-admin';
import { SimpleList } from 'react-admin';

export const UserList = () => (
    <List>
      <SimpleList
        primaryText={(record) => record.name}
        secondaryText={(record) => record.username}
        tertiaryText={(record)  => record.email}
      />
    </List>
  );
//List считывает параметры запроса из url, вызывает API, создаёт набор обратных вызовов