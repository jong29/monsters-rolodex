import { Component } from "react";
import './card-container.styles.css';

class CardContainer extends Component {
		render () {
      const monster = this.props;
      const {id, name, email} = monster;
      console.log(id, name, email);

			return (
        <div key={id} className="card-container">
          <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
			)
		}
	}

export default CardContainer;