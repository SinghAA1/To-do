import React from 'react';
import './todoInput.css'

export default class TodoInput extends React.Component
{
	constructor()
	{
		super()
		this.OnButtonClick.bind(this);
		this.OnEditChanged.bind(this);
	}

	OnButtonClick()
	{
		console.log("Button Click Event fired");
	}

	OnEditChanged()
	{
		console.log("User entered Text");
	}

	render()
	{
		return ( <div>
					<input type="text" onChange={()=> this.OnEditChanged()} />
					<button className="btn btn-primary" onClick={()=> this.OnButtonClick()}>Submit</button>
				 </div>
				)
	}
}