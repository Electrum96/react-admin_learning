import { UserList } from "./users";
import { dataProvider } from  "./dataProvider";
import { Admin, Resource } from "react-admin";

// @ts-ignore
export const App = () => (
    <Admin
        dataProvider={dataProvider}>
        <Resource name="users" list={UserList}/>
	
        
    </Admin>
);

    