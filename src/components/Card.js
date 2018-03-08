import React, { Component } from 'react';
import '../css/Card.css';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      infoIsVisible: false
    };

    this.changeInfoIsVisible = this.changeInfoIsVisible.bind(this);
    this.renderCardInfo = this.renderCardInfo.bind(this);
  }

  changeInfoIsVisible() {
    this.setState({
      infoIsVisible: !this.state.infoIsVisible
    });
  }

  renderCardInfo(card) {
    window.console.log(card);
    return (
        <ol>
          <li>{card.name}</li>
          <li>Rarity: {card.rarity}</li>
          <li>Type: {card.type}</li>
          <li>Power: {card.power}</li>
          <li>Toughness: {card.toughness}</li>
          <li>Mana Cost: {card.manaCost}</li>
          <li>{card.text}</li>
        </ol>);
  }

  render() {
    const {card, index} = this.props;
    const {infoIsVisible} = this.state;
    return (
      <div className='card-div' key={index} onClick={() => this.changeInfoIsVisible()}>
        <img className='card-image' src={card.imageUrl} alt={card.name} />
        {infoIsVisible ? this.renderCardInfo(card) : null}
      </div>
    );
  }
}

export default Card;
