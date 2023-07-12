import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';//комноненты react-admin для совершения CRUD
import { dataProvider } from './dataProvider';//поставщик данных
import { UserList } from './users'; //компонент списка, который можно настроить 
import { PostList } from './posts';// компонент с постами

export const App = () => (
  <Admin dataProvider={dataProvider}>
   <Resource name="posts" list={PostList} />
   <Resource name="users" list={UserList} recordRepresentation="name"/> 
   
  </Admin>
);
