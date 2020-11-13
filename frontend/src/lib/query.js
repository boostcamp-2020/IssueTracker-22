const parse = (str) => {
  if(!str) return Object
  const splited = str.replace('?', '').split('&');
  const res = splited.reduce((total, cur, i) => {
    const [key, value] = cur.split('=');
    return `${total}${i === 0 ? '' : ','}"${key}":"${value}"`;
  }, '');
  return JSON.parse(`{${res}}`);
};

const construct = (queryObject) => {
  let res = '?';
  let i = 0;
  for (const [key, value] of Object.entries(queryObject)) {
    res += `${i === 0 ? '' : '&'}${key}=${value}`;
    i++;
  }
  return res;
};

const updateValue = (str, key, value) => {
  const queryObject = parse(str);
  for (const i in queryObject) {
    if (i === key) {
      queryObject[i] = value;
      return construct(queryObject);
    }
  }
  return `${construct(queryObject)}&${key}=${value}`;
};

const getValue = (str, key) => {
  const queryObject = parse(str);
  for (const i in queryObject) {
    if (i === key) return queryObject[i];
  }
  return -1;
};
const pushQuery = (str, key, value) => {
  const queryObject = parse(str);
  for (const i in queryObject) {
    if(i === key) return
  }
  queryObject[key] = value
  return construct(queryObject);
}
const removeQuery = (str, key, value) => {
  const queryObject = parse(str);
  for (const i in queryObject) {
    if (i === key && queryObject[i] === value) delete queryObject[i];
  }
  return construct(queryObject);
};

const changeIsopen = (str, state) => {
  if (state === 'open') return str.replace('isopen=0', 'isopen=1');
  return str.replace('isopen=1', 'isopen=0');
};

export {
  parse, construct, updateValue, changeIsopen, getValue, pushQuery, removeQuery,
};
