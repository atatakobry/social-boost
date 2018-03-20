import React, { Component } from 'react';
import youtubeSearch from 'youtube-api-v3-search';
import { concat, reject, isString, isEmpty } from 'lodash';

import { localStorage } from './libs';

import { Container, Row, Col } from 'reactstrap';

import Search from './Search';
import History from './History';
import Player from './Player';

import logo from './logo.png';
import styles from './App.modules.css';

const API_KEY = 'AIzaSyCwI-l2BRYxBxAF9LeEYwXsfugoFJ6QTdE';

class App extends Component {
  constructor() {
    super();

    const { historyItems } = localStorage.getState() || {};

    this.state = {
      searchQuery: '',
      searchResults: undefined,
      historyItems: historyItems,
      playableVideoId: undefined
    };

    this.onSearch = this.onSearch.bind(this);
    this.onHistoryItemAdd = this.onHistoryItemAdd.bind(this);
    this.onHistoryItemDelete  = this.onHistoryItemDelete.bind(this);
  }

  onSearch() {
    const { searchQuery } = this.state;

    if (!isString(searchQuery) || isEmpty(searchQuery)) {
      return;
    }

    youtubeSearch(API_KEY, {
      q: searchQuery,
      part: 'snippet',
      type: 'video'
    })
      .then(({ items }) => {
        this.setState({
          searchResults: items
        });
      });
  }

  onHistoryItemAdd(item) {
    const { id: { videoId } } = item;

    if (!videoId) {
      return;
    }

    const { historyItems } = this.state;
    const _historyItems = concat([], item, reject(historyItems, item => item.id.videoId === videoId));

    this.setState({
      historyItems: _historyItems,
      playableVideoId: videoId
    }, () => {
      localStorage.updateState({
        historyItems: _historyItems
      });
    });
  }

  onHistoryItemDelete(item) {
    const { id: { videoId } } = item;

    if (!videoId) {
      return;
    }

    const { historyItems } = this.state;
    const _historyItems = reject(historyItems, item => item.id.videoId === videoId );

    this.setState({
      historyItems: _historyItems
    }, () => {
      localStorage.updateState({
        historyItems: _historyItems
      });
    });
  }

  render() {
    const { searchQuery, searchResults, historyItems } = this.state;

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img className={styles.logo}
               src={logo}
               alt="logo"
          />
        </header>

        <div className={styles.content}>
          <Container>
            <Row>
              <Col>
                <Search query={searchQuery}
                        items={searchResults}
                        onResultItemClick={this.onHistoryItemAdd}
                        onChange={e => { this.setState({ searchQuery: e.target.value }) }}
                        onSubmit={this.onSearch}
                />
              </Col>
            </Row>

            <Row>
              <Col xs="5">
                <History items={historyItems}
                         onHistoryItemDelete={this.onHistoryItemDelete}
                         onHistoryItemClick={this.onHistoryItemAdd}
                />
              </Col>

              <Col xs="7">
                <Player />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
