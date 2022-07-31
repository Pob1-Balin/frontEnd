import React, { useRef } from 'react';
import { useIdleTimer } from 'react-idle-timer'

function IdleTimerContainer(props){
    const idleTimerRef = useRef(null);
    const timePast = useIdleTimer();

    const timerProps = {
        debounce: 0,
        timeout: 5000,
    }

    const timer =  useIdleTimer(timerProps);


    const zion =  timePast.getLastActiveTime();



      const onPrompt = () => {
    // // Fire a Modal Prompt
    // console.log("zion zion")
  }

  const onActive = (event) => {
    // Close Modal Prompt
    // Do some active action
    console.log("user active")

  }

  const onAction = (event) => {
    // Do something when a user triggers a watched event
    console.log("user active active")
  }

    const onIdle = () => {
        // Close Modal Prompt
        // Do some idle action like log out your user
        console.log("user idle");
        console.log("trytyuln", timer.getTotalActiveTime())
        timer.reset();
      }


    const {
        start,
        reset,
        activate,
        pause,
        resume,
        isIdle,
        isPrompted,
        isLeader,
        getTabId,
        getRemainingTime,
        getElapsedTime,
        getLastIdleTime,
        getLastActiveTime,
        getTotalIdleTime,
        getTotalActiveTime
      } = useIdleTimer({
        onPrompt,
        onIdle,
        onActive,
        onAction,
        timeout: 5 * 1000,
        promptTimeout: 0,
        events: [
          'mousemove',
          'keydown',
          'wheel',
          'DOMMouseScroll',
          'mousewheel',
          'mousedown',
          'touchstart',
          'touchmove',
          'MSPointerDown',
          'MSPointerMove',
          'visibilitychange'
        ],
        immediateEvents: [],
        debounce: 0,
        throttle: 0,
        eventsThrottle: 200,
        element: document,
        startOnMount: true,
        startManually: false,
        stopOnIdle: false,
        crossTab: false,
        name: 'idle-timer',
        syncTimers: 0,
        leaderElection: false
      })



    return(
         <></>
    );
}


export default IdleTimerContainer;









// export const App = () => {


//   return (
//     <HomePage />
//   )
// }