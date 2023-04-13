import { toast } from "react-toastify"

export function notify(message) {
  toast(`🦄 ${message}`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  })
}

