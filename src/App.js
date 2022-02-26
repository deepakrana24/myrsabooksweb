import React from 'react';
import {Admin ,Resource} from 'react-admin';
import restProvider  from 'ra-data-simple-rest';
import postList from './Components/postList';
import {authProvider, dataProvider , firebaseRealtime} from './firebaseConfig.js';
// import notFound from './Components/notFound';
function App() {
  return (
    <Admin   dataProvider={dataProvider} title='Myrsa cms'  >
     
      <Resource name='books' list={postList} />

     
    </Admin>
  );
}

export default App;
