import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Video from './Video';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import SearchPage from './SearchPage';
function App() {
   return (
      <div className="app">
      
<Router>
<Header />
<Switch>
   <Route path="/search/:searchTerm">
   <div className="app__page">
   <Sidebar />
   <SearchPage />
   </div>        
   </Route>
   <Route path="/">
   <div className="app__page">
   <Sidebar />
<Video />
</div>  
   </Route>
</Switch>
   </Router>
        

       
      
      </div>
   );
}

export default App;