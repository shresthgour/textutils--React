import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpClick = () => {
		// console.log('Uppercaase was clicked: ' + text);
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to UPPERCASE!", "success");
	};

	const handleLoClick = () => {
		// console.log('Uppercaase was clicked: ' + text);
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to lowercase!", "success");
	};

	const handleOnChange = (event) => {
		// console.log('On Change');
		setText(event.target.value);
	};

	const clear = (event) => {
		let newText = "";
		setText(newText);
		props.showAlert("Text Cleared!", "success");
	};

	const calculateWords = () => {
		let numOfWords = 0;
		let words = text.split(" ");
		let length = words.length;
		numOfWords =
			words[length - 1] === "" || words[length - 1] === " "
				? length - 1
				: length;
		console.log(words);
		return numOfWords;
	};

	const speak = () => {
		let msg = new SpeechSynthesisUtterance();
		msg.text = text;
		window.speechSynthesis.speak(msg);
		props.showAlert("Speaking Right Now!", "success");
	};

	const [text, setText] = useState("");
	// text = "new text"; // Wrong way to change the state
	// setText('new text'); // Right way to change the state
	return (
		<>
			<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						value={text}
						onChange={handleOnChange}
						style={{backgroundColor: props.mode==='dark'?'#242426':'white', color: props.mode==='dark'?'white':'black'}}
						id="myBox"
						rows="8"></textarea>
				</div>
				<button className="btn btn-primary" onClick={handleUpClick}>
					Convert to Uppercase
				</button>
				<button className="btn btn-primary mx-2" onClick={handleLoClick}>
					Convert to Lowercase
				</button>
				<button className="btn btn-primary" onClick={speak}>
					Speak
				</button>
				<button className="btn btn-danger mx-2" onClick={clear}>
					Clear
				</button>
			</div>
			<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
				<h1>Your Text Summary: </h1>
				<p>
					{calculateWords()} words and {text.length} characters
				</p>
				<p>{(0.008 * calculateWords()).toFixed(2)} Miniutes to read</p>
				<h2>Preview</h2>
				<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
			</div>
		</>
	);
}
