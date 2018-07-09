var katzDeli = [];
//var number = 1
function takeANumber(katzDeliLine, number) {
  // number increments by one
  let number = 1
  number++
  katzDeliLine.push(number)
  return `Welcome, you are number ${number}`
}

// takeANumber => 1
// takeANumber => 2
// takeANumber => 3
// nowServing => 1
// takeANumber => 4

function nowServing(katzDeliLine) {
  //katzDeliLine = ["Ali", "Steven"]
  //katzDeliLine.length = 2
  //!katzDeliLine.length = false
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${katzDeliLine.shift()}.`

  //katzDeliLine = ["steve"]
}

function currentLine(katzDeliLine) {
  //katzDeliLine = ["Ali", "Steven"]
  if (!katzDeliLine.length){
    return "The line is currently empty."
  }
  const whoIsWaiting = []
  for (let i = 0, l = katzDeliLine.length; i < l; i++)
  whoIsWaiting.push(`${i + 1}. ${katzDeliLine[i]}`)
  return `The line is currently: ${whoIsWaiting.join(", ")}`
}
