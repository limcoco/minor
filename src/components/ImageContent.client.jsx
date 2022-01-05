import { useCartLinesTotalQuantity } from '@shopify/hydrogen/client';
import { useState } from 'react';

import ImageToggle from './ImageToggle.client'

export default function ImageContent(

) {
    const [hover, setHover] = useState(false);
    const [id, setId] = useState('all');
    const handleFieldChange = (fieldId, value) => {
        setHover(value);
        setId(fieldId);
    };
    return (
        <div className={`image_content ${hover ? "backgrounded" : ""}`}>
            {!hover ?
                <img className='pt-5 m-auto head_part' src='https://cdn.shopify.com/s/files/1/0619/9780/9900/files/MF_Logo_Linear_AW_1.png?v=1641368205' />
                :
                <img className='pt-5 m-auto head_part' src='https://cdn.shopify.com/s/files/1/0619/9780/9900/files/MF_Logo_Linear_AW_1-1.png?v=1641368205' />
            }

            <div className='flex justify-around mt-5 image_container'>
                <ImageToggle className={`image_items ${hover ? "visibled" : ""} ${id == 1 ? "hovered" : ""}`} onChange={handleFieldChange} url="https://cdn.shopify.com/s/files/1/0619/9780/9900/files/gxxl_5a943671-4f84-4f90-a3cc-37aeac110002_1659.png?v=1641367330" hoverurl="https://cdn.shopify.com/s/files/1/0619/9780/9900/files/Frame_2.png?v=1641367330" id="1" />
                <ImageToggle className={`image_items ${hover ? "visibled" : ""} ${id == 2 ? "hovered" : ""}`} onChange={handleFieldChange} url="https://cdn.shopify.com/s/files/1/0619/9780/9900/files/gxxl_5a943671-4f84-4f90-a3cc-37aeac110002_1659-1.png?v=1641367330" hoverurl="https://cdn.shopify.com/s/files/1/0619/9780/9900/files/Frame_3.png?v=1641368205" id="2"/>
                <ImageToggle className={`image_items ${hover ? "visibled" : ""} ${id == 3 ? "hovered" : ""}`} onChange={handleFieldChange} url="https://cdn.shopify.com/s/files/1/0619/9780/9900/files/gxxl_5a943671-4f84-4f90-a3cc-37aeac110002_1659-2.png?v=1641367330" hoverurl="https://cdn.shopify.com/s/files/1/0619/9780/9900/files/Frame_4.png?v=1641368205" id="3"/>
                <ImageToggle className={`image_items ${hover ? "visibled" : ""} ${id == 4 ? "hovered" : ""}`} onChange={handleFieldChange} url="https://cdn.shopify.com/s/files/1/0619/9780/9900/files/gxxl_5a943671-4f84-4f90-a3cc-37aeac110002_1659-3.png?v=1641367330" hoverurl="https://cdn.shopify.com/s/files/1/0619/9780/9900/files/Frame_5.png?v=1641369041" id="4"/>
            </div>

            <div className='flex justify-center social_icons'>
                {!hover ?
                    <img className='social_icon' src='https://cdn.shopify.com/s/files/1/0619/9780/9900/files/Vector.png?v=1641369744' />
                    :
                    <img className='social_icon' src='https://cdn.shopify.com/s/files/1/0619/9780/9900/files/Vector_1.png?v=1641370296' />
                }
                {!hover ?
                    <img className='social_icon' src='https://cdn.shopify.com/s/files/1/0619/9780/9900/files/vector1.png?v=1641369744' />
                    :
                    <img className='social_icon' src='https://cdn.shopify.com/s/files/1/0619/9780/9900/files/vector7.png?v=1641370312' />
                }
                {!hover ?
                    <img className='social_icon' src='https://cdn.shopify.com/s/files/1/0619/9780/9900/files/vector2.png?v=1641369744' />
                    :
                    <img className='social_icon' src='https://cdn.shopify.com/s/files/1/0619/9780/9900/files/vector6.png?v=1641370312' />
                }
            </div>
        </div>
    );
}
