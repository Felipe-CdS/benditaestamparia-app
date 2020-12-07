import React from 'react'

import './PlaceholderLoading.css'

function PlaceholderLoading() {
    return(
        <>
        <div className="lds-ellipsis"  style={{justifySelf: "end", alignContent: "end"}}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
        </>
    );
}


export default PlaceholderLoading;