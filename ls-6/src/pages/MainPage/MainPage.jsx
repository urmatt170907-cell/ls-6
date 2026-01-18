import React from "react";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    const next_page_fn = () => {
        navigate("/second");
    }


    return (
        <div>
            <p>MainPage</p>
            <button onClick={next_page_fn}>next_page</button>
        </div>
    );

}

export default MainPage;


