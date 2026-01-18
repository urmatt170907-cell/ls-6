import React from "react";
import {useNavigate} from "react-router-dom";

const SecondPage = () => {
    const navigate = useNavigate();

    const next_page_fn = () => {
        navigate("/this");
    }


    return (
        <div>
            <p>SecondPage</p>
            <button onClick={next_page_fn}>next_page</button>
        </div>
    );
};

export default SecondPage;