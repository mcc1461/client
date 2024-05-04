import Header from "../Header";
import React from 'react';
import "../App.css";
import Post from "../Post";

export default function IndexPage() {
    return (
        <>
            <h1 style={{textAlign:"center", fontSize:"2rem", fontWeight:"bold"}}> Index Page</h1>
            <Post />
            <Post />
            <Post />
        </>
    );
}



