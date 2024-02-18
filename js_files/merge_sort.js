function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        console.log(`left less ${left[0]} right ${right[0]}`)
        sortedArr.push(left.shift())
      } else {
        console.log(`left more ${left[0]} right ${right[0]}`)
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    console.log(`left ${left[0]} right ${right[0]}`)
    console.log([...sortedArr, ...left, ...right])
    return [...sortedArr, ...left, ...right]
  }
  
  
  function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    console.log(`left arr ${arr.slice(0, mid)} right arr ${arr.slice(mid)}`)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }
  console.log(mergeSort([3, 5, 8, 5, 99, 1,2])) // [1, 3, 5, 5, 8, 99]