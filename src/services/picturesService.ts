const API_KEY = '23567b218376f79d9415'; // other valid API keys: '760b5fb497225856222a', '0e2a751704a65685eefc'
const API_ENDPOINT = 'http://195.39.233.28:8035';

interface user {
  token: string;
}

let currentUser: user;

async function authSetup() {
  const res = await fetch(`${API_ENDPOINT}/auth`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      apiKey: API_KEY,
    }),
  });

  if (res.status === 200) {
    currentUser = await res.json();
    console.log('got token:', currentUser.token);
  } else {
    return Promise.reject('Could not get token');
  }
}

async function getPictures(page: number = 1) {
  if (!currentUser) {
    await authSetup();
  }
  const res = await fetch(`${API_ENDPOINT}/images?page=${page}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${currentUser.token}`,
    }),
  });
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

async function getPictureDetails(id: number = 1) {
  const res = await fetch(`${API_ENDPOINT}/images/${id}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${currentUser.token}`,
    }),
  });
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

export default {
  authSetup,
  getPictures,
  getPictureDetails,
};
