import React from 'react';
import { dragonService } from '../services/dragonService';
import '../assets/css/dragonForm.css'
import moment from 'moment';
import { Link } from 'react-router-dom';

class DragonForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name ? this.props.name : '',
			type: this.props.type ? this.props.type : '',
			history: this.props.history ? this.props.history : '',
			createdAt: this.props.createdAt ? moment(this.props.createdAt).format("YYYY-MM-DDTHH:mm:ss") : ''
		};
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}
	// delete a dragon
	async handleDelete() {
		await dragonService.deleteDragon(this.props.id)
		if(this.props.detail) {
			window.location.href = '/';
			return;
		}
		window.location.reload();
	}
	//edit a dragon
	async handlePut() {
		const data = {
			createdAt: this.state.createdAt, 
			id: this.props.id,
			name: this.state.name,
			type: this.state.type,
			history: this.state.history,
		} 
		await dragonService.putDragon(data);

		if(this.props.detail) {
			window.location.href = '/';
			return;
		}
		window.location.reload();
	}
	// add new dragon
	async handlePost() {
		const data = {
			name: this.state.name,
			type: this.state.type,
			history: this.state.history,
		} 
		await dragonService.postDragon(data);
		window.location.href = '/';
	}

	render() {
		const { name, type, createdAt, history } = this.state;
		return (
			<div className="dragon-form">
					<h3>Dragon {this.props.id}</h3>
					<input type="text" placeholder="name" className="form-group" name="name" value={name} onChange={(event) => this.handleChange(event)} />
					<input type="text" placeholder="type" className="form-group" name="type" value={type} onChange={(event) => this.handleChange(event)} />
					<input type="text" placeholder="history" className="form-group" name="history" value={history} onChange={(event) => this.handleChange(event)} />
					{ this.props.id ? <input type="datetime-local" className="form-group" name="createdAt" value={createdAt} onChange={ (event) => this.handleChange(event)} /> : null }
					<div className="buttons-container">
						<button className="button" onClick={ this.props.id ? () => this.handlePut() : () => this.handlePost() }>Salvar</button>
						{ this.props.id ? <button className="button delete" onClick={() => this.handleDelete()}>Deletar</button> : null }
					</div>	
						{ !this.props.detail ? <Link className="detail-link" to={"/dragon/" + this.props.id}>Detalhes</Link> : null }
			</div>
		);
	}
}

export { DragonForm };