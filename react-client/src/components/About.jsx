import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate()
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter -1);
        }, 1000);
        if (counter === 0) {
            navigate('/');
        }
        return () => clearInterval(interval);
    }, [counter, navigate]);

    return (
        <div>
            <h1>This is the about page</h1>
            <p>Redirecting in {counter} seconds...</p>
        </div>
    )
}

export default About