const { Component } = React;
const { render } = ReactDOM;

// // state data for 3 counters
// const data = [
//   { id: 1, value: 0 },
//   { id: 2, value: 0 },
//   { id: 3, value: 0 }
// ];

// Counter Component
function Counter ({value, onIncrement, onDecrement}) {
  return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={() => onDecrement}>-</button>
          <button className="button is-success is-small" onClick={() => onIncrement}>+</button>
        </div>
      </div>
    );
}

function App () {
  
  const [data, setData] = React.useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 }
  ]);
  
  const onIncrement = (valueAdd) => {
    this.state.value = this.state.value + valueAdd;
  };

  const onDecrement = (valueSubtract) => {
    this.state.value = this.state.value - valueSubtract;
  };

    return (
      <div>
        {data.map(counter => ( 
          <Counter 
            key={counter.id} 
            value={counter.value}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            />
        ))}
      </div>
    );
}
  
ReactDOM.render(
  <App/>
, document.getElementById('root'));