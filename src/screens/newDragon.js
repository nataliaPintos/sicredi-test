import React from 'react';
import '../assets/css/header.css';
import { DragonForm } from '../components/dragonform';


class NewDragon extends React.Component {

  constructor(props) {
    super(props);
    };

  render() {
    return (
      <div className="container-box">
       <div className="login-box">
         <DragonForm detail={true}></DragonForm>
       </div>
      </div>
    );
  }
}

export { NewDragon };