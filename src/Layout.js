import "./App.css";
import React from 'react';
import Header from './Header';
import Post from './Post';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Outlet } from 'react-router-dom';


export default function Layout() {
    return (
      <main>
        <Header />
        <Outlet />
      </main>
    );
}
