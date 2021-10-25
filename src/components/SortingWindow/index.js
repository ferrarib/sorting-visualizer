import React from "react";
import "./SortingWindowElements.css";

const SortingWindow = ({ arrayList, arrayLength, compare, swap, sorted }) => {
	return (
		<div className="sorting-container">
			{arrayList.map((element, i) => (
				<div
					id={element}
					key={element}
					style={{
						width: String(100 / arrayLength) + "%",
						height: String(element) + "%",
						backgroundColor:
							compare && (i === compare[0] || i === compare[1])
								? "yellow"
								: swap && (i === swap[0] || i === swap[1])
								? "red"
								: sorted && sorted.includes(i)
								? "green"
								: "blue",
						border: "solid white 1px",
						margin: "0 2px",
					}}></div>
			))}
		</div>
	);
};

export default SortingWindow;
