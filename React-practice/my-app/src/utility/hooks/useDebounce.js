import React, { useState } from 'react'


export default function useDebounce() {
    const [typingTimeout, setTypingTimeout] = useState("");

    function debounce(func, wait = 1000) {
        clearTimeout(typingTimeout);
        const timeout = setTimeout(() => {
            // setSearchTerm(text);
            func();
        }, wait);
        setTypingTimeout(timeout);
    }
    return debounce;
}
