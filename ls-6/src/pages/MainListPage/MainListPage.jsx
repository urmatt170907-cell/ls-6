import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MainListPage = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const myData = [
            { id: 1, title: "React в 2026", body: "Изучаем современную разработку на реальных примерах." },
            { id: 2, title: "Маршрутизация", body: "React Router Dom помогает переключать страницы без перезагрузки." },
            { id: 3, title: "Работа с карточками", body: "Flexbox позволяет удобно располагать элементы в ряд." },
            { id: 4, title: "Успешный проект", body: "Локальные данные — отличный способ отладить интерфейс." }
        ];

        const timer = setTimeout(() => {
            setList(myData);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <h2 className="loading">Загрузка...</h2>;

    return (
        <div className="main-page">
            <h1 className="page-title">Список постов</h1>
            <div className="card-container">
                {list.map(item => (
                    <div key={item.id} className="post-card">
                        <h3>{item.title}</h3>
                        <p>{item.body.substring(0, 50)}...</p>
                        <Link to={`/detailed/${item.id}`} className="card-btn">
                            Подробнее
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainListPage;
