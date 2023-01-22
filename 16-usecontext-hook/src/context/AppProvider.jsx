import { useState } from "react";
import { AppContext } from "./AppContext";

export default function AppProvider({ children }) {
    const [name, setName] = useState('Wesley')
    const number = 10

    return (
        <AppContext.Provider value={{ name, setName, number }}>
            {children}
        </AppContext.Provider>
    )
}