import React from 'react';
import './App.css';

function Helloworld(props) {
	return (
	<div id="hello">{props.mytext}</div>
	)
}

function App() {
	return ( <div>
		This is my component: <Helloworld mytext="Hello Vic" /> 
		<Helloworld mytext="Hola Vic"/> 
		<Helloworld mytext="Olá Vico"/></div>
	);
}

export default App;