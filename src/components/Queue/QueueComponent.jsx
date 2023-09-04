import React, { useRef } from "react";

import { useQueueState } from "rooks";

export default function QueueComponent() {
    const numberToPushRef = useRef(0);
    const [list, { enqueue, dequeue, peek, 
        length }] = useQueueState([]);
  
    function addToQueue() {
        numberToPushRef.current = 
            numberToPushRef.current + 1;
          
        enqueue(numberToPushRef.current);
    }
  
    return (
        <>
            <div>
                <h1 style={{ color: 'blue', margin: '20px' }}>Queue</h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'horizontal',
                width: '400px',
                height: '60px',
                fontSize: '20px',
                margin: '20px',
                borderTop: '2px solid green',
                borderBottom: '2px solid green'
            }}>
                {list.map((item) => {
                    return <div style={{
                        width: '30px',
                        height: '30px',
                        background: '#a3fc9d',
                        borderRadius: '5px',
                        margin: '10px',
                        textAlign: 'center'
                    }}
                        key={item}>{item}</div>;
                })}
            </div>
            <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }}
                onClick={addToQueue}>enqueue</button>
            <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }}
                onClick={dequeue}>
                dequeue
            </button>
            <p style={{
                color: '#e84917',
                fontSize: '20px',
                margin: '20px'
            }}>Front Element : {peek()}</p>
  
            <p style={{
                color: '#175ce8',
                fontSize: '20px',
                margin: '20px'
            }}>Length of Queue : {length}</p>
  
        </>
    );
}