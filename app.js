const createCookie = (clave, valor) => {
    const valorEscape = escape(valor);
    let nextMouth = new Date();
    nextMouth.setMonth(nextMouth.getMonth() + 1);

    document.cookie = `${clave}=${valorEscape};expires=${nextMouth};`

}

const deleteCookie = (clave) => {
    let previousMouth = new Date()
    previousMouth.setMonth(previousMouth.getMonth() - 1)

    document.cookie = `${clave}=Y;expires=${previousMouth}`

}

const obtenerCookie = () => {
    const cookies = document.cookie;
    const arrayCookies = cookies.split("; ")
    let objetoCookies = {}

    arrayCookies.forEach(cookie => {
        const cookieArray = cookie.split("=")

        const keyItem = cookieArray[0];
        objetoCookies[keyItem] = unescape(cookieArray[0])
    })

    return objetoCookies
}

createCookie("marca", "Audi");
createCookie("potencia", "200/kh");

const cookies = obtenerCookie();
console.log("Cookies: ", cookies)