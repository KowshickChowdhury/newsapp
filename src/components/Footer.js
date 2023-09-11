import React from 'react';

export default function Footer(props) { 
    return (
        <>
        <div className="container-fluid text-center footercls">
            <div style={{backgroundColor: props.mode === 'dark'?'#0f2d3a':'#f8f9fa',color: props.mode === 'dark'?'white':'#021942'}}>
                <p className='p-3'>@2023 Copyright- KowshickChowdhury</p>
            </div>
        </div>
        </>
    )
    
}
