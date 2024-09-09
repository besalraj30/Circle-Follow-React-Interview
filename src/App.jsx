import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useGetQuery} from './useGetQuery';
import './App.css'
import Circle from './Circle';
import { useThrottle } from './useThrottle';
import { useDebounce } from './useDebounce';

function App() {
  const [count, setCount] = useState(0)
  // const {res, isLoading} = useGetQuery("https://jsonplaceholder.typicode.com/users");
  // console.log(res);
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    // setTimeout(() => {
      circleRef.current.style.position = 'absolute';
      circleRef.current.style.top = `${e.clientY}px`;
      circleRef.current.style.left = `${e.clientX}px`;
    // }, 3000)
    // console.log(e.clientY); 
      
  }

  const throttledHandleMouseMove = useThrottle(handleMouseMove, 200);
  const debouncedHandleMouseMove = useDebounce(handleMouseMove, 200);

  return (
    <div onMouseMove={throttledHandleMouseMove} style={{height: '100vh', width: '100vw', position: 'relative'}}>
      <Circle ref={circleRef }/>
    </div>
    
    // <>
    //   {isLoading ? 'Loading...' : (
    //     <ul>{res?.map((user) => { 
    //     return <li key={user.id}>{user.name}</li>
    //   })}
    //   </ul>)}
    //   {isLoading ? 'Loading...' : (
    //     <ul>{res?.map((post) => { 
    //     return <li key={post.id}>{post.title}</li>
    //   })}
    //   </ul>)}
    // </>
  )
}

export default App
