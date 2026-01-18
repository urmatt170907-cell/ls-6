import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";


const DetailedPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const myData = [
            { id: 1, title: "React в 2026", body: "В 2026 году React стал еще быстрее и удобнее для разработчиков." },
            { id: 2, title: "Маршрутизация", body: "Полный текст про маршрутизацию: используйте useParams для ID." },
            { id: 3, title: "Работа с карточками", body: "Полный текст про карточки и стилизацию через CSS-in-JS." },
            { id: 4, title: "Успешный проект", body: "Вы успешно исправили ошибки и запустили приложение!" }
        ];

        const found = myData.find(el => el.id === parseInt(id));
        setPost(found);
    }, [id]);

    if (!post) return <h2 className="error">Запись не найдена</h2>;

    return (
        <div className="detailed-wrapper">
            <button className="back-link" onClick={() => navigate(-1)}>← Назад</button>
            <div className="content-box">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default DetailedPage;
