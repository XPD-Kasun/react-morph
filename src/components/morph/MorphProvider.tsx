import React from "react";


const morphContext = React.createContext({});

function MorphProvider({ children }) {

    return (
        <morphContext.Provider value={{}} children={children} />
    )
}

export { morphContext };
export default MorphProvider;