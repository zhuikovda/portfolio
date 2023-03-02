import React, { FC } from "react";

type ButtonUniversalPropstype = {
    title: string
}

export const ButtonUniversal: FC<ButtonUniversalPropstype> = (props)=>{
    return (
        <button>{props.title}</button>
    )
}