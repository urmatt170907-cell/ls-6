import { useNavigate } from "react-router-dom";
import "./style.css";

const CardUser = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div
            className="card_user"
            onClick={() => navigate(`/detailed/${item.id}`)}
        >
            <h5>{item.title}</h5>
            <p>{item.body}</p>
        </div>
    );
};

export default CardUser;
