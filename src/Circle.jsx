import { forwardRef, useEffect, useRef } from "react";

const Circle = forwardRef((props, ref) => {

    // useEffect(() => {

    //     const handleMouseMove = (e) => {
    //         circleRef.current.style.position = 'absolute';
    //         circleRef.current.style.top = `${e.clientY}px`;
    //         circleRef.current.style.left = `${e.clientX}px`;
    //     }
    //     window.addEventListener("mousemove", handleMouseMove);

    //     return () =>{
    //         window.removeEventListener("mousemove", handleMouseMove);
    //     }
        
    // }, [])
    return (
        <div ref={ref} style={{
            position: 'absolute',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'red'
        }} {...props} />
    )
});

export default Circle;