import React from 'react';
import YouTube from 'react-youtube';

import styles from './Player.modules.css';

function Player({ videoId }) {
  return (
    <div className={styles.component}>
      {
        videoId &&
        <YouTube videoId={videoId}
                 opts={{
                   height: '390',
                   width: '100%',
                   playerVars: { autoplay: 1 }
                 }}
        />
      }
    </div>
  );
}

export default Player;