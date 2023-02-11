import React from 'react';

const Overview = (props) => {
    const { tasks } = props

    return (
        //<ul>
        <div>
            {tasks.map(task => {
                return <div>{task.index} {task.text}</div>
        })}
        </div>
        
        //</ul>
    )
}

export default Overview;