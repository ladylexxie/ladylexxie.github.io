async function selectionSort(array) {
  let n = array.length

  for (let i = 0; i < n; i++) {
    let min = i
    ar.x = array[min].x
    redraw()
    for (let j = i + 1; j < n; j++) {
      await lu.sleep(100)
      ag.x = array[j].x
      redraw()
      if (array[j].height < array[min].height) {
        min = j
        ar.x = array[min].x
        redraw()
      }
    }

    if (min != i) {
      [array[i], array[min]] = [array[min], array[i]]
      await lu.sleep(100)
      redraw()
    }
  }
  resetArrows()
  menu.deselect()
  redraw()
}

async function insertionSort(array) {
  let n = array.length
  for (let i = 1; i < n; i++) {
    let current = array[i]
    let j = i - 1
    ar.x = array[i].x
    redraw()

    await lu.sleep(100)
    while ((j > -1) && (current.height < array[j].height)) {
      array[j + 1] = array[j]
      ag.x = array[j].x
      redraw()
      j--
      await lu.sleep(100)
    }
    array[j + 1] = current
    redraw()
  }
  resetArrows()
  menu.deselect()
  redraw()
}

async function mergeSort(array) {

  resetArrows()
  menu.deselect()
  redraw()
}

async function heapSort(array) {

  resetArrows()
  menu.deselect()
  redraw()
}

async function quickSort(array) {
  let stack = []
  stack.push(0)
  stack.push(array.length - 1)

  lu.sleep(100)
  while (stack[stack.length - 1] >= 0) {
    let end = stack.pop()
    let start = stack.pop()

    let pivot = partition(array, start, end)

    if (pivot - 1 > start) {
      stack.push(start)
      stack.push(pivot - 1)
    }
    if (pivot + 1 < end) {
      stack.push(pivot + 1)
      stack.push(end)
    }
  }

  resetArrows()
  menu.deselect()
  redraw()
  console.log('done')
}
function partition(array, start, end) {
  const pivotValue = array[end]
  ar.x = pivotValue.x
  redraw()
  let pivotIndex = start
  lu.sleep(100)
  for (let i = start; i < end; i++) {
    ag.x = array[i].x
    redraw()
    if (array[i].height < pivotValue.height) {
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
      pivotIndex++
    }
    lu.sleep(100)
  }
  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]]
  return pivotIndex;
}

async function shellSort(array) {

  resetArrows()
  menu.deselect()
  redraw()
}

async function bubbleSort(array) {

  resetArrows()
  menu.deselect()
  redraw()
}

async function combSort(array) {

  resetArrows()
  menu.deselect()
  redraw()
}

async function countingSort(array) {

  resetArrows()
  menu.deselect()
  redraw()
}

async function bucketSort(array) {

  resetArrows()
  menu.deselect()
  redraw()
}

async function radixSort(array) {

  resetArrows()
  menu.deselect()
  redraw()
}