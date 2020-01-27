import axios from 'axios';
export const addNewAnimal = async animal => {
  try {
    const res = await axios.post('https://reqres.in/api/users/', animal);
    console.log(res);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
