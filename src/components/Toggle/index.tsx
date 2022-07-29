import { useMachine, normalizeProps } from "@zag-js/react"
import * as toggle from "@zag-js/toggle"

export const Toggle = () => {
    const [state, send] = useMachine(toggle.machine({
        id: "1"
    }))
    const api = toggle.connect(state, send, normalizeProps)
    return (
        <button {...api.buttonProps}>
            {api.isPressed ? "On" : "Off"}
        </button>
    )
}