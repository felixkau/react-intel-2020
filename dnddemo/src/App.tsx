import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Board = number[][];

interface Submarine {
    direction: 'horizontal' | 'vertical',
    length: number,
    id: number,
}

/*
    submarines: [
      { direction: 'horizontal', length: 4, id: -1  },
      { direction: 'horizontal', length: 2, id: -1, },
      { direction: 'vertical', length: 2, id: -1,   },
      { direction: 'vertical', length: 3, id: -1    },
    ]
 */
function Sidebar(props: { submarines: Submarine[] }) {
    return (
        <div></div>
    )
}

const initialboard = 
 [
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0],
  ];

function MainGrid(props: { board: Board }) {
  const { board } = props;
  return (
      <div>
        <pre>{JSON.stringify(board)}</pre>

<table>
{
        board.map((row, rowindex) => (
          <tr>
             {
               row.map((item, columnIndex) => (
                  <td>{item}</td>
               ))
             }
          </tr>
           )
        )
}

</table>
        </div>
  );
}

function App() {
  const [ board, setBoard] = useState(initialboard);
  return (
    <div className="App">
        <MainGrid board={board} />
    </div>
  );
}

export default App;
