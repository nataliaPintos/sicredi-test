import Axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

export const dragonService = {
    deleteDragon,
    putDragon,
    listDragons,
    postDragon,
    getDragon
};

// delete dragon by id
function deleteDragon(id) {
  try {
    const resp =  Axios.delete(apiUrl + id);
    return resp;
  } catch (error) {
    console.error(error);
  }        
}

// get dragon by id
function getDragon(id) {
  try {
    const resp =  Axios.get(apiUrl + id);
    return resp;
  } catch (error) {
    console.error(error);
  }        
}

// list all dragons
function listDragons() {
  try {
    const resp =  Axios.get(apiUrl);
    return resp;
  } catch (error) {
    console.error(error);
  }
}

// add new dragon
async function postDragon(data) {
  try {
    const resp = await Axios.post(apiUrl, {
      name: data.name,
      type: data.type,
      histories:[data.history]
    })
  } catch (error) {
    
  }
}

// edit dragon information by id
async function putDragon(data) {
  try {
    const resp = await Axios.put(apiUrl + data.id, {
      name: data.name,
      type: data.type,
      createdAt: data.createdAt,
      histories:[data.history]
    })
  } catch (error) {
    console.error(error);
  }
}

