let lesTxt = document.getElementsByTagName('p')
console.log(lesTxt)

let txtTab = Array.from(lesTxt)
console.log(txtTab)

txtTab.map((x) => {x.innerText = 'Salut'})