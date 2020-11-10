function typeResize(name) {

    let size = "";


    if (window.innerWidth <= 550) {

        if (name.length >= 9) { size = "font-size:26px" }
        if (name.length > 10) { size = "font-size:22px" }
        if (name.length > 11) { size = "font-size:18px" }
        if (name.length > 12) { size = "font-size:14px" }
        if (name.length > 13) { size = "font-size:12px" }
        if (name.length > 14) { size = "font-size:10px" }

    }
    else {

        if (name.length >= 9) { size = "font-size:50px" }
        if (name.length > 10) { size = "font-size:48px" }
        if (name.length > 11) { size = "font-size:42px" }
        if (name.length > 12) { size = "font-size:38px" }
        if (name.length > 13) { size = "font-size:36px" }
        if (name.length > 14) { size = "font-size:32px" }
    }

    return size
}

function typeResize2(name) {
    console.log(name.length)

    let size = "";

    if (window.innerWidth > 1200) {

        if (name.length >= 8) { size = "font-size:6.85vw" }
        if (name.length >= 10) { size = "font-size:6.75vw" }
        if (name.length >= 11) { size = "font-size:6.65vw" }
        if (name.length >= 12) { size = "font-size:6.5vw" }
        if (name.length >= 13) { size = "font-size:6vw" }
        if (name.length >= 14) { size = "font-size:5.5vw" }
    }

    if (window.innerWidth <= 1200) {

        if (name.length >= 9) { size = "font-size:80px" }
        if (name.length > 10) { size = "font-size:76px" }
        if (name.length > 11) { size = "font-size:72px" }
        if (name.length > 12) { size = "font-size:68px" }
        if (name.length > 13) { size = "font-size:64px" }
        if (name.length > 14) { size = "font-size:60px" }

    }
    if (window.innerWidth <= 550) {

        if (name.length >= 9) { size = "font-size:70px" }
        if (name.length > 10) { size = "font-size:66px" }
        if (name.length > 11) { size = "font-size:62px" }
        if (name.length > 12) { size = "font-size:58px" }
        if (name.length > 13) { size = "font-size:54px" }
        if (name.length > 14) { size = "font-size:50px" }
    }
    if (window.innerWidth <= 480) {

        if (name.length >= 9) { size = "font-size:52px" }
        if (name.length > 10) { size = "font-size:48px" }
        if (name.length > 11) { size = "font-size:44px" }
        if (name.length > 12) { size = "font-size:40px" }
        if (name.length > 13) { size = "font-size:36px" }
        if (name.length > 14) { size = "font-size:32px" }
    }

    return size
}
