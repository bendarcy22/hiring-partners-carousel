import React from 'react';
import PartnerList from './PartnerList';
const App = props => {
  return(
    <div>
    <h1>Hiring Partners</h1>
    <PartnerList
    partners={props.data}/>
    </div>
  );

}
export default App;
