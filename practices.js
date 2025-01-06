const searchAbleFiled = ["email", "name", "address"];


const output = searchAbleFiled.map((fild) => (
    { [fild]: { regex: "searchValue", options: "i" } }
))


console.log(output)