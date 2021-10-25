import React from "react";
import "./NavbarElements.css";
import { useCallback } from "react";

function myFunction() {
	document.getElementById("drop-down").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches(".dropbtn")) {
		var dropdowns = document.getElementsByClassName("menu-drop-down");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

const Navbar = ({
	setSortAlgo,
	setListSize,
	handleSort,
	generateRandomArray,
	sorting,
	completed,
}) => {
	const handleAlgorithmChange = useCallback(
		(event) => {
			console.log(event.target.getAttribute("value"));
			setSortAlgo(event.target.getAttribute("value"));
		},
		[setSortAlgo]
	);
	const handleListSizeChange = useCallback(
		(event) => {
			console.log(event.target.value);
			setListSize(Number(event.target.value));
		},
		[setListSize]
	);

	return (
		<div className="navbar">
			<div className="navbar-container">
				<div className="navbar-heading">
					<h1>Sorting Visualizer</h1>
				</div>
				<div className="navbar-menu">
					<div className="menu-item range">
						<label htmlFor="speed">Speed: </label>
						<input
							type="range"
							name="speed"
							id="speed"
							min="0"
							max="10"
							defaultValue="5"
						/>
					</div>
					<div className="menu-item range">
						<label htmlFor="size">List Size: </label>
						<input
							type="range"
							name="size"
							id="size"
							min="20"
							max="100"
							step="10"
							defaultValue="100"
							onInput={handleListSizeChange}
						/>
					</div>
					<div className="menu-item">
						<button className="dropbtn" onClick={myFunction}>
							Algorithm
						</button>
						<div id="drop-down" className="menu-drop-down">
							<a onClick={handleAlgorithmChange} value="bubblesort">
								Bubble Sort
							</a>
							<a onClick={handleAlgorithmChange} value="mergesort">
								Merge Sort
							</a>
							<a onClick={handleAlgorithmChange} value="insertionsort">
								Insertion Sort
							</a>
							<a onClick={handleAlgorithmChange} value="selectionsort">
								Selection Sort
							</a>
							<a onClick={handleAlgorithmChange} value="quicksort">
								Quick Sort
							</a>
						</div>
					</div>
					<div className="menu-item">
						<button onClick={generateRandomArray} disabled={sorting}>
							Update
						</button>
					</div>
					<div className="menu-item">
						<button onClick={handleSort} disabled={sorting || completed}>
							Sort
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
