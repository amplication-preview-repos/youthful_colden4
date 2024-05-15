import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EmailList } from "./email/EmailList";
import { EmailCreate } from "./email/EmailCreate";
import { EmailEdit } from "./email/EmailEdit";
import { EmailShow } from "./email/EmailShow";
import { ThreadList } from "./thread/ThreadList";
import { ThreadCreate } from "./thread/ThreadCreate";
import { ThreadEdit } from "./thread/ThreadEdit";
import { ThreadShow } from "./thread/ThreadShow";
import { LabelList } from "./label/LabelList";
import { LabelCreate } from "./label/LabelCreate";
import { LabelEdit } from "./label/LabelEdit";
import { LabelShow } from "./label/LabelShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GmailService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Email"
          list={EmailList}
          edit={EmailEdit}
          create={EmailCreate}
          show={EmailShow}
        />
        <Resource
          name="Thread"
          list={ThreadList}
          edit={ThreadEdit}
          create={ThreadCreate}
          show={ThreadShow}
        />
        <Resource
          name="Label"
          list={LabelList}
          edit={LabelEdit}
          create={LabelCreate}
          show={LabelShow}
        />
      </Admin>
    </div>
  );
};

export default App;
