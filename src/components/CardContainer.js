import React, { Component } from 'react';
import Card from './Card';
import * as request from 'request';
import {isEmpty} from 'lodash';
import '../css/Card.css';

const initialState = {
  showAddInfo: false,
  textShowAddInfo: 'Show Additional Info'
};

class CardContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      showAddInfo: initialState.showAddInfo,
      textShowAddInfo: initialState.textShowAddInfo
    };

    this.renderFilter = this.renderFilter.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.changeShowAdditionalInfo = this.changeShowAdditionalInfo.bind(this);
  }

  componentDidMount() {
    request.get('https://api.magicthegathering.io/v1/cards', (error, response, body) => {
      this.setState({
        cards: JSON.parse(body).cards
      });
    });
  }

  changeShowAdditionalInfo() {
    const {showAddInfo} = this.state;
    this.setState({
      showAddInfo: !showAddInfo,
      textShowAddInfo: !showAddInfo ? 'Hide Additional Info' : initialState.textShowAddInfo
    });
  }

  renderFilter() {
    return (
      <div className='card-container-filter'>
        <span className='show-hide-all-info' onClick={this.changeShowAdditionalInfo}>
          {this.state.textShowAddInfo}</span>
      </div>
    );
  }

  renderCards() {
    const {cards, showAddInfo} = this.state;
    return (
      <div className='card-container-list'>
        {isEmpty(cards) ? null :
          cards.map((card, index) => <Card card={card} index={index} showAddInfo={showAddInfo} />)}
      </div>
    );
  }

  render() {
    return (
      <div className='card-container-body'>
        {this.renderFilter()}
        {this.renderCards()}
      </div>
    );
  }
}

export default CardContainer;
