const LinkedList = require('../DSA-LinkedList/linkedList-Assignment')

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

//----------------------------------------------------------------------------------

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    //console.log(left)
    let right = array.slice(middle, array.length);
    //console.log(right)
    //console.log('---------------------------')
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

//-------------------------------------------------------------------

function qsort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }

    const mid = partition(array, start, end);
    array = qsort(array, start, mid);
    array = qsort(array, mid + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

//console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 ]));

//3. Write a function qSort that sorts a dataset using the quicksort algorithm.

    /*
    console.log(qsort([89,30,25,32,72,70,51,42,25,24,53,55,78,50,
    13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,
    28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,
    6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,
    73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]));
    */

/*
    Question 5. Given a Linked List, sort the linked list using merge sort. 
You will need your linked list class from previous lesson to create the 
list and use all of its supplemental functions to solve this problem. 

partial code below but I couldnt figure out how to code it while I know the logic

I would take a full link list 

node1 = {value: 3, next: node2}

node2 = {value: 1, next: node3}

node3 = {value: 2, next: node4}

node4 = {value: 4, next: null}

--find how long the link list is by itterating through it until you find a next null, then devide that by two
keep iterating through this with a recursive function until you have 4 empty linked lists. Grab first of the items in the group
if its greater than the second linked list, set the second LL's next value to the first LL. They that is sent up and you have two LL groups
of two. Then, you compair the first element in the first LL group and compair it to both nodes in the second group. If a node in the second group is 
less than the first node of the first group, set the node.next of the second group = to the 1st node of the first group and iterate like that
____________________________________________________________

function mergSortLL(linkedList) {

    let linkledListLength = 0;

    currNode = linkedList.head;

    while(currNode.next !== null) {
        console.log(currNode)
        currNode = currNode.next;
        
        linkledListLength ++;
    }

    linkledListLength ++;

}

function mergLL(start, end) {

}

function sortLinkedList() {
    let linkedList = new LinkedList();

    let toBeSorted = [3,1,4,2];

    for(let i = 0; i < toBeSorted.length; i++) {
        if(i === 0) {
            linkedList.insertFirst(toBeSorted[i])
        }else {
            linkedList.insertLast(toBeSorted[i])
        }
        
    }

    mergSortLL(linkedList);

    //linkedList.logWholeList();

    //console.log(mergeSort(linkedList));
}

sortLinkedList();
*/


//6. Bucket Sort: Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.

function bucketSort(array) {

    let max = Math.max(...array);
    let min = Math.min(...array);

    let sortedArray = [];

    if(array.length >= 2) {
   
        if(array[0] !== min) {
            //swap the values
            let minIndex = array.indexOf(min);
            let tempFirstVal = array[0];

            array[0] = min;
            array[minIndex] = tempFirstVal;
        }

        if(array[array.length-1] !== max) {
            //swap the values
            let maxIndex = array.indexOf(max);
            let tempLastVal = array[array.length-1];

            array[array.length-1] = max;
            array[maxIndex] = tempLastVal;
        }
        
        array = array.slice(1,array.length-1);
        minMaxSorted = bucketSort(array);

        sortedArray.push(min);

        for(let j = 0; j < minMaxSorted.length; j++) {
            sortedArray.push(minMaxSorted[j]);
        }        
        
        sortedArray.push(max);

    }else if(array.length === 1) {
        sortedArray.push(array[0]);
    }


    return sortedArray;

}

//console.log(bucketSort([5,1,6,2,7,3,8,4,9,10,22,13,198,54,36]));

function shuffleArray(array) {
    let swapIterations = (array.length-1)*3;
    let originalArray = [...array];

    for(let i = 0; i < swapIterations; i++) {

        let index1 = Math.floor(Math.random()* (array.length)); //random generating function
        let index2 = Math.floor(Math.random()* (array.length)); //random generation function two
        
        while( index1 === index2 ) {
            index2 = Math.floor(Math.random()* (array.length));
        }

        let tempNum = array[index1];
        
        array[index1] = array[index2];

        array[index2] = tempNum;

    }

    
    if(array === originalArray) {
        shuffleArray(array);
    }
    

    return array;
}

console.log(shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));
