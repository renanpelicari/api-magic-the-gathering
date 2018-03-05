import React, { Component } from 'react';
import {DialogContainer} from 'react-md';

class CardInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };

    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible } = this.state;
    const actions = [{
      onClick: this.hide,
      primary: true,
      children: 'Close',
    }];
    const {card} = this.props;
    window.console.log(card);

    return (
      <DialogContainer id="speed-boost" visible={visible} modal
                       title={card.name}
                       onHide={this.hide}
                       aria-describedby="speed-boost-description"
                       actions={actions}>
        <p className="md-color--secondary-text">
          <ul>
            <li>Rarity: {card.rarity}</li>
            <li>Type: {card.type}</li>
            <li>Power: {card.power}</li>
            <li>Toughness: {card.toughness}</li>
            <li>Mana Cost: {card.manaCost}</li>
          </ul>
          Additional Info: {card.text}
        </p>
      </DialogContainer>
    );
  }
}

export default CardInfo;
