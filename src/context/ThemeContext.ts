import React from "react";

interface ContextParams {
    theme: Theme;
    changeTheme: (theme:Theme) => void;
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export const ThemeContext = React.createContext<ContextParams>({
    theme: Theme.LIGHT,
    changeTheme: () => {}
})