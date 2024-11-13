import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL


const signup = async (formData) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/users/signup`, formData)
   
    if (res.err) {
      throw new Error(res.err)
    }
    return res.data

  } catch (err) {
    console.log(err)
    throw err
  }
}

export {
  signup,
}
