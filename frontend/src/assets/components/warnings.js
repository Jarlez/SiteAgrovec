import { toast } from 'react-toastify'

const errors = {
  async success(msg) {
    toast.success(msg, {
      style: { 
        background: 'forestgreen',
        opacity: 0.9,
        borderRadius: '10px'
       }
    })
  },

  async error(msg) {
    toast.error(msg, {
      style: { 
        opacity: 0.9,
        borderRadius: '10px'
       }
    })
  }
}

export default errors;