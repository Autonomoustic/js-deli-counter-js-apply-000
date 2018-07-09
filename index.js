var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  //katzDeliLine = ["Ali"]
  //name = "Steven"
  katzDeliLine.push(name)
  //katzDeliLine = ["Ali", "Steven"]
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

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
