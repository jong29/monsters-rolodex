import { Component } from "react";
import './card-list.styles.css';
import CardContainer from "../card-container/card-container.component";

class CardList extends Component {
  render() {
    const {monsters} = this.props;
    return (
      <div className="card-list">
        {monsters.map(monster => {
          return (
            <div className="container" key={`${monster.id}`}>
              <CardContainer monster = {monster}/>
            </div>
        )})}
      </div>
    );
  }
}

export default CardList;