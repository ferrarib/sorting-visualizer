import "./App.css";
import Navbar from "./components/Navbar";
import SortingWindow from "./components/SortingWindow";
import { useEffect, useState } from "react";
import {
	bubblesort,
	mergesort,
	quicksort,
	insertionsort,
	selectionsort,
} from "./components/AlgorithmLabels.js";

import BubbleSort from "./components/Algorithms/BubbleSort";
import MergeSort from "./components/Algorithms/MergeSort";
import QuickSort from "./components/Algorithms/QuickSort";
import InsertionSort from "./components/Algorithms/InsertionSort";
import SelectionSort from "./components/Algorithms/SelectionSort";

function App() {
	function generateRandomArray(len) {
		setCompleted(false);
		setSorting(false);
		setSortedIndex([]);

		const randomArray = Array.from(Array(len + 1).keys()).slice(1);

		for (let i = randomArray.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1));
			const temp = randomArray[i];

			randomArray[i] = randomArray[randomIndex];
			randomArray[randomIndex] = temp;
		}

		setArrayList(randomArray);
	}

	const [sortAlgo, setSortAlgo] = useState("bubblesort");
	const [listSize, setListSize] = useState(100);
	const [arrayList, setArrayList] = useState([]);
	const [swap, setSwap] = useState([]);
	const [compare, setCompare] = useState([]);
	const [sortedIndex, setSortedIndex] = useState([]);
	const [sorting, setSorting] = useState(false);
	const [completed, setCompleted] = useState(true);

	useEffect(() => {
		generateRandomArray(listSize);
	}, [listSize, sortAlgo]);

	var algoLabels;

	// Sorting according to the algorithm
	const handleSort = () => {
		// console.log("handleSort is called");
		const sortAccOrder = (sortingOrder) => {
			(function loop(i) {
				setTimeout(function () {
					const [j, k, arr, index] = sortingOrder[i];
					setCompare([j, k]);
					setSwap([]);

					if (index !== null) {
						setSortedIndex((prevState) => [...prevState, index]);
					}

					if (arr) {
						setArrayList(arr);
						if (j !== null || k != null) setSwap([j, k]);
					}

					if (++i < sortingOrder.length) {
						loop(i);
					} else {
						setSorting(false);
						setCompleted(true);
					}
				}, 1);
			})(0);
		};

		setSorting(true);

		sortAlgo === "bubblesort"
			? sortAccOrder(BubbleSort(arrayList))
			: sortAlgo === "mergesort"
			? sortAccOrder(MergeSort(arrayList))
			: sortAlgo === "quicksort"
			? sortAccOrder(QuickSort(arrayList))
			: sortAlgo === "insertionsort"
			? sortAccOrder(InsertionSort(arrayList))
			: sortAlgo === "selectionsort"
			? sortAccOrder(SelectionSort(arrayList))
			: (() => {
					setSorting(false);
					setCompleted(true);
			  })();
	};

	switch (sortAlgo) {
		case "mergesort":
			algoLabels = mergesort;
			break;
		case "quicksort":
			algoLabels = quicksort;
			break;
		case "insertionsort":
			algoLabels = insertionsort;
			break;
		case "selectionsort":
			algoLabels = selectionsort;
			break;

		default:
			algoLabels = bubblesort;
			break;
	}

	return (
		<div className="app-container">
			<Navbar
				setSortAlgo={setSortAlgo}
				setListSize={setListSize}
				handleSort={handleSort}
				generateRandomArray={() => generateRandomArray(listSize)}
				sorting={sorting}
				completed={completed}
			/>
			<div className="main-container">
				<div className="sorting-info">
					<div className="info-col-1">
						<div className="info-title-table">
							<div className="info-title">{algoLabels.title}</div>
						</div>
						<div className="info-description">{algoLabels.description}</div>
					</div>
					<div className="info-col-2">
						<div className="info-list">[{arrayList.join(" , ")}]</div>
					</div>
				</div>
				<SortingWindow
					arrayList={arrayList}
					arrayLength={listSize}
					swap={sorting && swap}
					compare={sorting && compare}
					sorted={sortedIndex}
				/>
			</div>
		</div>
	);
}

export default App;
