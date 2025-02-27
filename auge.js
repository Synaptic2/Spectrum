function addTear() {
    let tearContainer = document.getElementById("tears");
    let tear = document.createElement("div");
    tear.classList.add("tear");
    tearContainer.appendChild(tear);
    
    setTimeout(() => {
        tear.remove();
    }, 2000);
}