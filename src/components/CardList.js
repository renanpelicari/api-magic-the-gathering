import React, { Component } from 'react';
import Card from './Card';
import * as request from 'request';
import {isEmpty} from 'lodash';
import '../css/CardList.css';

class CardList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };

    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    request.get('https://api.magicthegathering.io/v1/cards', (error, response, body) => {
      this.setState({
        cards: JSON.parse(body).cards
      });
    });
  }

  renderCards() {
    const {cards} = this.state;
    return isEmpty(cards) ? null :
      cards.map((card, index) => <Card card={card} index={index} />);
  }

  render() {
    return (
      <div className='card-list-background'>
        <div className='card-list-container'>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default CardList;