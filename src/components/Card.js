import React, { Component } from 'react';
import CardInfo from './CardInfo';
import '../css/Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
    this.openCardInfoDialog = this.openCardInfoDialog.bind(this);
  }

  showAlert(card) {
    const message = `
      TEMPORARY ALERT (while CardInfo component is not working)
      Name: ${card.name}
      Rarity: ${card.rarity}
      Type: ${card.type}
      Power: ${card.power}
      Toughness: ${card.toughness}
      Mana Cost: ${card.manaCost}
      Additional Info: 
      ${card.text}`;
    alert (message);
  }

  openCardInfoDialog(card, index) {
    this.showAlert(card);
    return <CardInfo card={card} index={index} />;
  }

  render() {
    const {card, index} = this.props;
    return (
      <div className='card-container' onClick={() => this.openCardInfoDialog(card, index)}>
        <span className='card-image'>
          <img className='card-image' src={card.imageUrl} alt={card.name} />
        </span>
      </div>
    );
  }
}

export default Card;
