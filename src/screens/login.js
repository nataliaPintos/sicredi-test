import React from 'react';
import { loginService } from '../services/loginService';
import '../assets/css/login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    loginService.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });
    const resp = loginService.login(username, password);

    // if there is username, then redirect to home
    if (resp.username) {
      this.props.history.push('/')
    }

    //if not, show error
    this.setState({ error: resp, loading: false });

  }

  render() {
    const { username, password, submitted, loading, error } = this.state;
    return (
      <div className="container-box">
        <div className="login-box">
          <h2>Login</h2>
          <div className="alert">
            username: teste<br /> password: teste
          </div>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group'}>
              <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={this.handleChange} />
              { submitted && !username && <div className="error">username é obrigatório.</div> }
            </div>
            <div className={'form-group'}>
              <input type="password" className="form-control" name="password" placeholder="password" value={password} onChange={this.handleChange} />
              { submitted && !password && <div className="error">password é obrigatório.</div> }
            </div>
            <div className="form-group">
              <button disabled={loading}>Login</button>
            </div>
            { error && <div className="error">{error}</div> }
          </form>
        </div>
      </div>
    );
  }
}

export { LoginPage };