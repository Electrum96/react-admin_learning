// import {Admin, Resource} from "react-admin";
// import {dataProvider} from './dataProvider';
// import {UserList} from "./users";
// import {PostEdit, PostList, PostCreate} from "./posts";
// import PostIcon from "@mui/icons-material/Book";
// import UserIcon from "@mui/icons-material/Group";
// //настройка значков меню, передача icon атрибута каждому <Resource>
// import {Dashboard} from "./Dashboard";
// // компонент пользовательской домашней страницы, передается в  св-ве dashboard
// // для <Admin>
// import {authProvider} from "./authProvider";
// // компонент со структурой аунтефикации, передается в  св-ве authProvider для
// // <Admin> export const App = () => (     <Admin  authProvider={authProvider}
// // dataProvider={dataProvider} dashboard={Dashboard}>       <Resource
// // name="posts" list={PostList}  edit={PostEdit} create={PostCreate}
// // icon={PostIcon}/>       <Resource  name="users" list={UserList}
// // icon={UserIcon} recordRepresentation="name" />     </Admin>   ); <App>
// // отображает компонент <Admin> - корневой компонент приложения react-admin

import * as React from "react";
import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {PostList} from './posts';

const App = () => (
    <Admin dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList}/>
    </Admin>
);

export default App;