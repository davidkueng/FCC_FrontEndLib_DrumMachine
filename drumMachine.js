

let playSound = (e) => {
        let id = e[0]       
        document.querySelector(`#${id}`).play();
};

document.addEventListener("keydown", (e) => {
    let key = `#${e.key}`.toUpperCase();
    document.querySelector(key).play()
})