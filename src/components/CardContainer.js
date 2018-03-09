import React, { Component } from 'react';
import Card from './Card';
import * as request from 'request';
import {bindAll, isEmpty} from 'lodash';
import '../css/Card.css';

const initialState = {
  showAddInfo: false,
  textShowAddInfo: 'Show Additional Info',
  pageNumber: 1,
  cards: []
};
const API_URL = 'https://api.magicthegathering.io/v1/cards';
const PAGE_SIZE = 20;

class CardContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: initialState.cards,
      showAddInfo: initialState.showAddInfo,
      textShowAddInfo: initialState.textShowAddInfo,
      pageNumber: initialState.pageNumber
    };
    bindAll(this, ['loadCards', 'renderFilter', 'renderCards', 'changeShowAdditionalInfo', 'shouldLoadMore']);
  }

  componentDidMount() {
    this.loadCards();
  }

  loadCards() {
    const {pageNumber} = this.state;
    const url = `${API_URL}?page=${pageNumber}&pageSize=${PAGE_SIZE}`;
    request.get(url, (error, response, body) => {
      this.setState({
        cards: [...this.state.cards,  ...JSON.parse(body).cards]
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

  shouldLoadMore() {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    });
    this.loadCards();
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
      <div className='card-container-list' onWheel={() => this.shouldLoadMore()}>
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
