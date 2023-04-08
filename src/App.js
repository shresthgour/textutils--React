// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#242426";
			showAlert("Dark Mode has been enabled", "success");
			// document.title = "TextUtils - Dark Mode";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light Mode has been enabled", "success");
			// document.title = "TextUtils - Light Mode";
		}
	};

	return (
		<>
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className="container my-3">
					<Routes>
						{/* /users      -> Component 1
              /users/home -> Component 2 */}
						<Route exact path="/about" element={<About mode={mode} />} />
						<Route
							exact
							path="/"
							element={
								<TextForm
									showAlert={showAlert}
									heading="Try TextUtils - Word counter, Character counter, Remove extra spaces"
									mode={mode}
								/>
							}
						/>
					</Routes>
					{/* <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> */}
				</div>
			</Router>
		</>
	);
}

export default App;
