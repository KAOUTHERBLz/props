import React from 'react';

import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
    <h1>checkpoint-js-props</h1>
    <Profile FullName="Kawther Blouza"  Profession="Web devloper" age="29">
      <img src='https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvJTIwZGUlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='tof'/>
   </Profile>

    </div>
  );
}

export default App;
