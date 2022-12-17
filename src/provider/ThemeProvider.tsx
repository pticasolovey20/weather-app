import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "context/ThemeContext";
import { changeCssRootVariables } from "model/ChangeCssRootVariables";


interface ProviderParams {
    children: ReactNode;
}

export const ThemeProvider = ({children, ...props}:ProviderParams) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

    const changeTheme = (theme:Theme) => {
        setTheme(theme)
        changeCssRootVariables(theme)
    }
    
    return (
        <ThemeContext.Provider 
            value={{
                theme,
                changeTheme
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}