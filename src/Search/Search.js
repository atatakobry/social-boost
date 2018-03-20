import React from 'react';
import { Button } from 'reactstrap';

import SearchItem from './SearchItem';
import SearchPlaceholder from './SearchPlaceholder';

import styles from './Search.modules.css';

function Search({ query, items, onResultItemClick, onChange, onSubmit }) {
  return (
    <form
      className={styles.component}
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="input-group">
        <input className="form-control"
               type="text"
               placeholder="Search on YouTube..."
               value={query || ''}
               onChange={onChange}
        />
        <div className="input-group-append">
          <Button className={styles.button}
                  type="submit"
                  color="primary"
                  disabled={!query.length}
          >
            Search
          </Button>
        </div>
      </div>

      {
        !items ?
          null :
          !items.length ?
            <SearchPlaceholder /> :
            items.map(item =>
              <SearchItem key={item.etag}
                          item={item}
                          onClick={onResultItemClick}
              />
            )
      }
    </form>
  );
}

export default Search;