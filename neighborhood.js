const randomRestruantButton = document.querySelector("#randomRestruantBtn");

const randomRestruant = () => {
    const restruantArr = ["Casey's", "Nick's Prairie Cafe", "Pizza Cellar", "Dairy Queen"];
    let arrIndex = Math.floor((Math.random() * 4))
    alert(restruantArr[arrIndex]);
}

randomRestruantButton.addEventListener('click', randomRestruant);