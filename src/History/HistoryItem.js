import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

import styles from './HistoryItem.modules.css';

function HistoryItem({ item, onDelete, onClick }) {
  return (
    <Container className={styles.component}>
      <Row>
        <Col xs="10">
          <div className={styles.title}>
            <span onClick={() => onClick(item)}>
              {item.snippet.title}
            </span>
          </div>
        </Col>

        <Col xs="2">
          <div className={styles.action}>
            <Button color="link"
                    size="sm"
                    onClick={() => onDelete(item)}
            >
              Delete
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HistoryItem;