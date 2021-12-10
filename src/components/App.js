import React from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import {Route, Routes} from 'react-router-dom';
import LinkList  from './LinkList';

const App = () => {
  // return <CreateLink />;
return(
  <div className = "center w85">
    <Header />
    <div className= "ph3 pv1 background-gray">
      <Routes>
        <Route exact path ="/" element={<LinkList />} />
        <Route exact path = "/create" element={<CreateLink />} /> 
      </Routes>
    </div>
  </div>
);
};


// class App extends Component{
//   render(){
//     return<LinkList />;
//   }
// }

export default App;