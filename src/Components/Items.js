import React, {useState} from 'react';

function Items({
  name,
  price,
  Increase,
  Decrease,
  onAddCount,
  onSubCount,
  count,
}) {
  async function onIncrease() {
    await Increase(price);
    await onAddCount();
  }
  async function onDecrease() {
    if (count !== 0) {
      await Decrease(price);
      await onSubCount();
    }
  }
  return (
    <div className="row text-center my-2">
      <div className="col-4 mt-1">
        <span className="h6">
          {name} ({count})
        </span>
      </div>
      <div className="col-4">
        <button className="btn btn-danger btn-sm" onClick={onDecrease}>
          Less
        </button>
      </div>
      <div className="col-4">
        <button className="btn btn-secondary btn-sm" onClick={onIncrease}>
          More
        </button>
      </div>
    </div>
  );
}

export default Items;
