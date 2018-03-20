import React from 'react';
import { Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

import styles from './SearchItem.modules.css';

function SearchItem({ item, onClick }) {
  return (
    <div className={styles.component}>
      <Row>
        <Col xs="2">
          <img className={styles.thumbnail}
               src={item.snippet.thumbnails.default.url}
               alt="thumbnail"
          />
        </Col>

        <Col xs="10">
          <div className={styles.title}>{item.snippet.title}</div>
          <div className={styles.action}>
            <Button outline
                    color="danger"
                    size="sm"
                    onClick={() => onClick(item)}
            >
              Play
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SearchItem;