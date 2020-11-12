const parse = ( str ) => {
    let splited = str.replace("?", "").split("&")
    let res = splited.reduce((total, cur, i) => {
      let [key, value] = cur.split("=")
      return total + `${i === 0 ? '' : ','}"${key}":"${value}"`
    }, "")
    return JSON.parse(`{${res}}`)
}

const construct = (queryObject) => {
    let res = "?"
    let i = 0;
    for(const [key, value] of Object.entries(queryObject)) {
        res += `${i === 0 ? "" : "&"}${key}=${value}`
        i++;
    }
    return res
}

const changeIsopen = (str, state) => {
    if(state === "open") return str.replace("isopen=0", "isopen=1")
    else return str.replace("isopen=1", "isopen=0")
}

export {parse, construct, changeIsopen}