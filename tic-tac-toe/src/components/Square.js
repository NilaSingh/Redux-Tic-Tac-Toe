import React from 'react'

const Square = ({value, onClick}) =>{
    const style = value ? `squares ${value}` : `squares`  //assign class styles `squares + the imported value` if value is not null, if it is just assign `squares` to styles
    return (
        <button className={style} onClick={onClick}>{value}</button> //passed through props, value is x or o value and classname is assigned depending on what value is
    )
}

export default Square