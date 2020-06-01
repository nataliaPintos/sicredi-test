import React from 'react';
import { dragonService } from '../services/dragonService';
import { DragonForm } from '../components/dragonform';
import { Header } from '../components/header';
import '../assets/css/home.css';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      dragons: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ 
      user: JSON.parse(localStorage.getItem('user')),
      dragons: { loading: true }
    });
    // get list of dragons
    dragonService.listDragons().then(dragons => this.setState({ dragons: dragons.data }));
  }

  render() {
    const { user, dragons } = this.state;
    return (
      <div className="home">
        <Header></Header>
        <h1>Bem-vindo {user.username}!</h1>
        {dragons.loading && <p>Carregando dragões...</p>}
        {dragons.length &&
          <ul className="dragons">
            {dragons.map((dragon) =>
              <li className="dragon-card" key={dragon.id}>
                <DragonForm name={dragon.name} type={dragon.type} createdAt={dragon.createdAt} id={dragon.id}></DragonForm>
              </li>
            )}
          </ul>
        }                
      </div>
    );
  }
}

export { HomePage };