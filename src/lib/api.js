const opts = {
  method: 'post', 
  headers: {
      'Content-Type': 'application/json'
  }
}


async function post(route) {

  const res = await fetch(route, opts);

  if (res.status != 200) {
      return { OK: false, error: res.statusText };
  }

  const json = await res.json();
  console.log(json)
  return { OK: true, data: json };

}

export { post };



