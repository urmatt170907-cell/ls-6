import React from "react";
import {useNavigate} from "react-router-dom";

const ThisPage = () => {
    const navigate = useNavigate();

    const next_page_fn = () => {
        navigate(-2);
    }


    return (
        <div>
            <p>ThisPage</p>
            <button onClick={next_page_fn}>next_page</button>
        </div>
    );
};

export default ThisPage;