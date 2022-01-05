import { useState } from 'react';

export default function ImageToggle(
    {  
        id,
        className,
        url,
        hoverurl,
        onChange
    }
) {
    const [hover, setHover] = useState(false);
    
    const Hovered = () => {
        setHover(true)
        onChange(id, true);
    }

    const Leaved = () => {
        setHover(false)
        onChange('all', false);
    }

    return (
        <>
            <div className={className}>
            {hover ?
                <img onMouseEnter={Hovered} onMouseLeave={Leaved} src={hoverurl} />
                :
                <img onMouseEnter={Hovered} onMouseLeave={Leaved} src={url} />
            }
            </div>
        </>
    );
}
