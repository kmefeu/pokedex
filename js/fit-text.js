function typeResize(name) {

    let size = "";

    if (name.length >= 9) { size = "font-size:50px" }
    if (name.length > 10) { size = "font-size:48px" }
    if (name.length > 11) { size = "font-size:42px" }
    if (name.length > 12) { size = "font-size:38px" }
    if (name.length > 13) { size = "font-size:36px" }
    if (name.length > 14) { size = "font-size:32px" }

    return size
}

function typeResize2(name) {
    console.log(name.length)

    let size = "";

    if (name.length >= 8) { size = "font-size:6.85vw" }
    if (name.length >= 10) { size = "font-size:6.75vw" }
    if (name.length >= 11) { size = "font-size:6.65vw" }
    if (name.length >= 12) { size = "font-size:6.5vw" }
    if (name.length >= 13) { size = "font-size:6vw" }
    if (name.length >= 14) { size = "font-size:5.5vw" }

    return size
}
