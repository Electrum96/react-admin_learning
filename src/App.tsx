import { Admin, Resource } from 'react-admin';//комноненты react-admin для совершения CRUD
import { dataProvider } from './dataProvider';//поставщик данных
import { UserList } from './users'; //компонент списка, который можно настроить 
import { PostCreate, PostEdit, PostList } from './posts'; 
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

export const App = () => (
  <Admin dataProvider={dataProvider}>
   <Resource name="posts" list={PostList}  edit={PostEdit} create={PostCreate} icon={PostIcon}/>
   <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon}/> 
  </Admin>
);
