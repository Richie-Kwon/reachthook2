import React from 'react'

export default function Container({name, age}) {
    return (
        <div>
            <h2>
                Name: {name}
            </h2>
            <h2>
                Age:{age}
            </h2>
        </div>
    )
}
