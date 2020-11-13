import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Square = ({ value, onClick, style }) => {
  return (
    <button className="square" onClick={onClick} style={style}>
      {value}
    </button>
  );
};

class Board extends React.Component {
  renderSquare(i) {
    let style = {};
    let ifWinner = this.props.winnerCellsIndex;
    if (this.props.bolded === i || (ifWinner && ifWinner.includes(i))) {
      style = {
        color: "red",
        border: "3px solid black",
      };
    }
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
        style={style}
      />
    );
  }
  render() {
    let row = Array(3).fill(null);
    let column = Array(3).fill(null);
    let counter = 0;

    row = row.map((i, index) => {
      return (
        <div className="board-row" key={index}>
          {
            (column = column.map(() => {
              return this.renderSquare(counter++);
            }))
          }
        </div>
      );
    });
    return <div className="saver">{row}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
      historyIndex: [],
      bolded: null,
    };
  }

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    let index = this.state.historyIndex.slice();
    index.length = this.state.stepNumber;
    index.push(i);

    this.setState(() => {
      return {
        history: history.concat([
          {
            squares: squares,
          },
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        historyIndex: index,
        isSort: false,
      };
    });
  };

  jumpTo = (step) => {
    let indexHistory = this.state.historyIndex.slice();
    let index = indexHistory[step - 1];

    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      bolded: index,
    });
  };

  sort = () => {
    this.setState(() => {
      return {
        isSort: !this.state.isSort,
      };
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    console.log(current, "current");

    const moves = history.map((step, move) => {
      const position = marksPosition(this.state.historyIndex[move - 1]);
      const desc = move ? "go to move number " + position : "go to start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    if (this.state.isSort) {
      moves.sort((a, b) => b.key - a.key);
    }

    let status;

    if (winner) {
      status = "Winner: " + winner[0];
    } else {
      current.squares.includes(null)
        ? (status = "Next player: " + (this.state.xIsNext ? "X" : "O"))
        : (status = "We end it in a draw");
    }

    return (
      <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            bolded={this.state.bolded}
            winnerCellsIndex={winner}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button
            onClick={() => {
              this.sort();
            }}
          >
            push to sort
          </button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], a, b, c];
    }
  }
  return null;
}

function marksPosition(index) {
  switch (index) {
    case 0:
      return " row 1 col 1";
    case 1:
      return " row 1 col 2";
    case 2:
      return " row 1 col 3";
    case 3:
      return " row 2 col 1";
    case 4:
      return " row 2 col 2";
    case 5:
      return " row 2 col 3";
    case 6:
      return " row 3 col 1";
    case 7:
      return " row 3 col 2";
    case 8:
      return " row 3 col 3";
    default:
      return null;
  }
}
