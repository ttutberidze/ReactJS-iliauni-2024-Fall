import { memo } from "react";
import { useTheme } from "./context/theme";

const User = ({name, onChange, index}) => {
    const {theme} = useTheme()
    return (
        <div style={{textAlign: 'center'}}>
            <input style={theme} value={name} onChange={(event) => onChange(event, index)} />
        </div>
    )
}

export default memo(User);