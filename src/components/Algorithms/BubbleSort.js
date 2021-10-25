const swap = (arr, i, j) => {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

const BubbleSort = (arrayList) => {
	const listCopy = arrayList.slice(); // copying blocks array
	const sortingOrder = [];

	let i, j;

	for (i = 0; i < listCopy.length; i++) {
		for (j = 0; j < listCopy.length - i - 1; j++) {
			sortingOrder.push([j, j + 1, null, null]); // Compare
			if (listCopy[j] > listCopy[j + 1]) {
				swap(listCopy, j, j + 1);
				sortingOrder.push([j, j + 1, listCopy.slice(), null]); // Swap
			}
		}
		sortingOrder.push([null, null, null, j]); // j-th element is in correct position ( Sorted )
	}

	console.log(sortingOrder);

	return sortingOrder;
};

export default BubbleSort;
