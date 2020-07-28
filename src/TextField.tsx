import React, {useState, useRef} from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => void; // function
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    // const [count, setCount] = useState<number | null | undefined | string>(5); // in ts | == || => or
    // const [count, setCount] = useState<{text: string}>({text:"hello"})
    
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null)
    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}
