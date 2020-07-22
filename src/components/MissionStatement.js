import React, { useRef, useState, useEffect, useCallback } from 'react';
// import { render } from 'react-dom';
import { useTransition, animated } from 'react-spring';
import './../index.css'
import mission from './mission.jpg';


function MissionStatement() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Rescue', 'Adopt', 'Care']), 2000))
    ref.current.push(setTimeout(() => set(['Home', 'Love']), 50000))
    ref.current.push(setTimeout(() => set(['Rescue', 'Adopt', 'Rehome']), 80000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <>
    <div className="mission">
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
        ))}
    </div>
    <div className='missionpic'>
       <img src={mission} alt='shelter'/>
    </div>
    </>
  )
}

function PageDisplay() {

    return (
     <div className='missionpic'>
       <img src={mission} alt='shelter'/>
    </div>
  
    )
  }


export default MissionStatement;