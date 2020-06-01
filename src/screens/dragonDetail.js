import React from 'react';
import '../assets/css/header.css';
import { DragonForm } from '../components/dragonform';
import { dragonService } from '../services/dragonService';
import { Header } from '../components/header';


class DragonDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dragon: null
    }
  };
  
  componentDidMount() {
    dragonService.getDragon(this.props.match.params.id).then((data) => this.setState({dragon: data.data}))

  }
  render() {
    const { dragon } = this.state;
    return (
      <div className="container-box">
       <div className="login-box">
        { dragon != null ? <DragonForm name={dragon.name} type={dragon.type} createdAt={dragon.createdAt} id={dragon.id} detail={true}></DragonForm> : null}
       </div>
      </div>
    );
  }
}

export { DragonDetail };