import React, {useState, useEffect} from 'react';
import Quotes from "./components/Quotes";
import Header from './components/Header';
function App(){
	const [quote,setQuote] = useState({
		anime: null,
		character: null,
		quote: null,
	});
	const fetchQuote = async () => {
		return await fetch('https://animechan.vercel.app/api/random')
			.then(response => response.json())
	}

	const generate = async () => {
		setQuote(await fetchQuote());
	}
	useEffect(async () =>{
		setQuote(await fetchQuote());
	}, []);
	return (
		<div className="App">
			<Header />
			<Quotes quote={quote}/>
			<button onClick={generate}>Generate new quote</button>
			<footer>
			<div class="footer-container">
				<div>©️ Made by <a href="https://github.com/SakethKanchi"> Saketh Kanchi</a>.</div>
				<div>©️ Credits to <a href="https://animechan.vercel.app/"> AnimeChan</a> and <a href="https://github.com/catppuccin/catppuccin">Catppuccin</a>.</div>
			</div>
			</footer>
		</div>
	);
}

export default App;