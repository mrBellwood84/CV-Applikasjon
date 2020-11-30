import React from 'react'
import { observer } from "mobx-react-lite"

interface IProps
{
    content:string;
    click: () => void;
}

const PageLink: React.FC<IProps> = ({content, click}) => {

    return (
        <div className="pageContentLink" onClick={click} >
            {content}
        </div>
    )
}

export default observer(PageLink)