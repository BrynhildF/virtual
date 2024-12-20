export async function fetchMapData(mapRequest) {
  const response = await fetch("http://127.0.0.1:8000/user/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mapRequest),
  });
  if (!response.ok) throw new Error("Failed to fetch map data");
  return await response.json();
}

export async function fetchPathData(srcX, srcY, dstX, dstY) {
  const response = await fetch(
    `http://127.0.0.1:8000/user/path?src_x=${srcX}&src_y=${srcY}&dst_x=${dstX}&dst_y=${dstY}`
  );
  if (!response.ok) throw new Error("Failed to fetch path data");
  return await response.json();
}

export async function sendOrder(user_id, car_id, user_x, user_y, dst_x, dst_y) {
  const response = await fetch('http://127.0.0.1:8000/user/order', {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(
      {
        user_id: user_id,
        car_id: car_id,
        user_x: user_x,
        user_y: user_y,
        dst_x: dst_x,
        dst_y: dst_y
      })
  })
  if(response.ok)
    return await response.json();
  else
    throw new Error('order request failed');
}


export async function getNextStep(){
  const response = await fetch('http://127.0.0.1:8000/user/evolve', {
    method :'GET',
    headers: {
      'accept' : 'application/json'
    }
  });
  if (response.ok)
    return await response.json();
 else
    throw new Error('Evolve request failed');
}