import React, { useRef } from "react";
import "./style.css";

const LoadDocs = () => {
    const ref_docs = useRef(null);
    const update_docs = useRef(null);
    const load_locs_fn = async () => {
        ref_docs.current.focus();
        // console.log(ref_docs.current, "ref_docs");
        useEffect(() => {
            ref_docs.current.focus();
        }, []);


    };

    return (
        <div>
            {/*<input ref={ref_docs} className="input_docs" type="file" />*/}
            {/*<button onClick={load_locs_fn}>click</button>*/}
            <input className={focus} ref={ref_docs} type={"text"}/>
            <button onClick={load_locs_fn}>focus</button>
        </div>
    );
};

export default LoadDocs;