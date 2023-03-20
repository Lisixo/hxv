import { TitlebarContainer } from "./window/container";
import { TitlebarButton } from "./window/button";
import { IconMinus, IconWindowMaximize, IconWindowMinimize, IconX } from "@tabler/icons-react";
import { appWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";

const buttonStyles: React.CSSProperties = {
  padding: '3px 0.5rem',
  margin: '3px 0px'
}

export function Titlebar() {
  const [isMaximized, setIsMaximized] = useState(false)

  async function windowState(){
    const _isMaximized = await appWindow.isMaximized()
    setIsMaximized(_isMaximized)
    return _isMaximized
  }

  useEffect(() => {
    const checkLoop = setInterval(windowState, 100)

    return () => clearInterval(checkLoop)
  })

  return <>
    <TitlebarContainer dragRegion style={{width: '100%'}} className="border-b-2 border-custom-700">
      <div>

      </div>
      <TitlebarContainer dragRegion style={{padding: '0px 0.5rem'}} className="border-b-[1px] border-custom-700">
        <TitlebarButton
          icon={<IconMinus size={20} />}
          style={buttonStyles}
          action={() => appWindow.minimize()}
        />
        <TitlebarButton
          icon={isMaximized ? <IconWindowMinimize size={20} /> : <IconWindowMaximize size={20} />}
          style={buttonStyles}
          action={async () => await windowState() ? appWindow.unmaximize() : appWindow.maximize()}
        />
        <TitlebarButton
          icon={<IconX size={20} />}
          style={{...buttonStyles, ...{background: '#dc2626'}}}
          action={() => appWindow.close()}
        />
      </TitlebarContainer>
    </TitlebarContainer>
  </>
}