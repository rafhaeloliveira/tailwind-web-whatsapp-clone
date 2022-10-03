import React, { ReactElement } from 'react';

interface AvatarProps  {
    size: number | string
}

const Avatar = ({ 
    size = 10
}: AvatarProps): ReactElement => {
    return (
        <div className="avatar">
            <div className={`w-${size} rounded-full`}>
                <img src="https://placeimg.com/192/192/people" alt="avatar" />
            </div>
        </div>
    )
}

export default Avatar;