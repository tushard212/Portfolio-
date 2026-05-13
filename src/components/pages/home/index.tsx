import React from 'react';
import Panel from '../../common/panel';


function HomePage() {
    return (
        <div>
        <Panel
                title= "Hello Mates!"
    descrip = {< p className = "size-40 mb-3 mt-4" > i'm <span className="color-red">Tushar Dalmia</span>, a developer and a DSA enthusiast</p>}
    remark = "find out more about me!"
    btnString = "start"
        />
        </div>
    );
}

export default HomePage;
