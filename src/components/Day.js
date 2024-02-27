import React from "react";

export default function Day({day}){
    return (
        <div className="border boder-gray-200 flex flex-col">
            <header className="flex flex-col items-center"> 
            <p className="text-sm mt-1">{day.format('ddd')}</p> 
            <p className="text-sm p-1 my-1 text-center">{day.format("DD")}</p>
            </header>
        </div>
    )
}