function growFork() {
    let handle = document.getElementById("handle");
    let currentHeight = handle.style.height ? parseInt(handle.style.height) : 50;
    handle.style.height = (currentHeight + 20) + "px";
}