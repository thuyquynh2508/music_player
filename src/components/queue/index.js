import React from "react";

export default function Queue({ tracks, setCurrentIndex }) {
  console.log(tracks);
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((trackItem, index) => (
            <div
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{trackItem?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
