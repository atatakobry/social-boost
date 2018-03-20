import React from 'react';

import HistoryItem from './HistoryItem';
import HistoryPlaceholder from './HistoryPlaceholder';

import styles from './History.modules.css';

function History({ items, onHistoryItemDelete, onHistoryItemClick }) {
  return (
    <div className={styles.component}>
      <h4 className={styles.title}>Watch history</h4>
      {
        !items || !items.length ?
          <HistoryPlaceholder /> :
          items.map(item =>
            <HistoryItem key={item.etag}
                         item={item}
                         onDelete={onHistoryItemDelete}
                         onClick={onHistoryItemClick}
            />
          )
      }
    </div>
  );
}

export default History;