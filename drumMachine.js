let playSound = (e) => {
        let id = e[0]       
        const name = e.substring(e.indexOf('-')+1);
        document.querySelector(`#${id}`).play();
        document.getElementById('display').innerHTML = name; 
}

document.addEventListener("keydown", (e) => {
    let key = `${e.key}`.toUpperCase();
    let buttonsId = document.getElementsByTagName("button");

    for (let i = 0; i < buttonsId.length; i++) {
        if (buttonsId[i].id[0] === key) {
            let name = buttonsId[i].id.substring(buttonsId[i].id.indexOf('-')+1)
            document.getElementById('display').innerHTML = name;
        }
    }
    document.getElementById(key).play()
    })


