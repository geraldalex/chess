import React, { FC, useEffect } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";


interface TimeProps {
    currentPlayer: Player | null;
    restart: () => void
}

const Timer: FC<TimeProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = React.useState(300)
    const [whiteTime, setWhiteTime] = React.useState(300)
    const [winner, setWinner] = React.useState(null)
    const timer = React.useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

function startTimer(){
if(timer.current){
    clearInterval(timer.current)
}

const callback = currentPlayer?.color === Colors.WHITE ? dicrementWhiteTime : dicrementBlackTime
timer.current = setInterval(callback, 1000)

}

function dicrementBlackTime(){
    setBlackTime(prev => prev - 1)
}

function dicrementWhiteTime(){
    setWhiteTime(prev => prev - 1)
}

const handleRestart = () => {
    setWhiteTime(300)
    setBlackTime(300)
    restart()
  }

  function winnerPlayer(){
if(blackTime === 0){

}

if(whiteTime === 0){
    
}
  }

    return (
        <div>
<div>
    <button onClick={handleRestart}>Новая партия</button>
</div>
<h2>Черные - {blackTime}</h2>
<h2>Белые - {whiteTime}</h2>
        </div>
    )
}

export default Timer