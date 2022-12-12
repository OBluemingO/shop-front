import axios from '../axios/axios'

const useRefreshToken = () => {
  const refresh = async () => {
    try{
      const response  = await axios.get('/refresh', {
        withCredentials: true
      }) 
    } catch(err) {
      console.log(err,'===== from useRefresh_token')
    }  
  }
  
  return null
}

export default useRefreshToken