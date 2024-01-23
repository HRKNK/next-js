'use client';

import { createContext } from 'react';

const SidebarContext = createContext({value: 1});

const Sidebar = () => {
    return (
        <SidebarContext.Provider value={{value: 1}}>
            <div>
                {'CONTEXT'}
            </div>
        </SidebarContext.Provider>
    );
};

export default Sidebar;