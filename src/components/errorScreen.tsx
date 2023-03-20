import { IconCircleDotted, IconMathXMinusX, IconSkull } from "@tabler/icons-react";
import { useState } from "react";

export function ErrorScreen(){
  const [isRestarting, setIsRestarting] = useState(false)

  function refreshHandler(){
    setIsRestarting(true)
    window.location.reload()
  }

  return (
    <div 
      className="flex flex-col justify-center items-center gap-2 min-h-full text-white"
    >
      <IconSkull size={256} />
      <h1>Opsieee...</h1>
      <h2>You found a bug!</h2>
      <br />
      <p>You can restart app here</p>
      <button
        className="bg-custom-500 hover:bg-custom-400 text-black font-bold px-4 py-2 rounded-lg transition-all"
        onClick={refreshHandler}
      >
        {
          !isRestarting
          ? 'Restart'
          : <IconCircleDotted className="animate-spin" />
        }
      </button>
    </div>
  )
}