import React from "react";
import "./Home.css";
import Card from "../Card";

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Syphar Website</h1>
                <p>Your one-stop destination for amazing content and services.</p>
                <button className="home-button">Learn More</button>
            </header>
            <div id="cards">
                <Card imgSrc="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600" title="Advanced React Patterns" desc="Explore advanced concepts like hooks, context, and performance optimization." btnName="Click me" />
                <Card imgSrc={"https://images.pexels.com/photos/225502/pexels-photo-225502.jpeg?auto=compress&cs=tinysrgb&w=600"} title="React Native" desc="Build mobile applications with React Native and take your skills to mobile platforms." btnName="Click me" />
                <Card imgSrc="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600" title="Introduction to React" desc="Learn the basics of React, the popular JavaScript library for building user interfaces." btnName="Click me" />
                <Card imgSrc={"https://images.pexels.com/photos/225502/pexels-photo-225502.jpeg?auto=compress&cs=tinysrgb&w=600"} title="Testing React Apps" desc="Learn how to write effective tests for your React components and applications." btnName="Click me" />
            </div>
            <div id="cards">
                <Card imgSrc={"https://images.pexels.com/photos/225502/pexels-photo-225502.jpeg?auto=compress&cs=tinysrgb&w=600"} title="React Animations" desc="Implement engaging animations in React using libraries like Framer Motion." btnName="Click me" />
                <Card imgSrc="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600" title="React with Redux" desc="Master state management in React using Redux for scalable applications." btnName="Click me" />
                <Card imgSrc={"https://images.pexels.com/photos/225502/pexels-photo-225502.jpeg?auto=compress&cs=tinysrgb&w=600"} title="React Deployment" desc="Deploy your React applications efficiently using popular hosting platforms." btnName="Click me" />
                <Card imgSrc="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600" title="React Router" desc="Understand client-side routing with React Router for seamless navigation." btnName="Click me" />
            </div>

        </div>
    );
};

export default Home;
