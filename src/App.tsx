import {Admin, Resource} from 'react-admin'; //компоненты react-admin дляCRUD
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import {UserList} from './users'; //настраиваемый компонент списка
import {PostCreate, PostEdit, PostList} from './posts';
import {Dashboard} from './Dashboard';
import {authProvider} from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');



 const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}>
        <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            icon={PostIcon}/>
        <Resource
            name="users"
            list={UserList}
            icon={UserIcon} recordRepresentation="name"/>
    </Admin>
);

export default App;
