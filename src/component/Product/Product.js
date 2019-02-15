import React from 'react'

export default function Product(props){
    return(
        <div style={{border:"3px solid black", height:"350px", width:"400px", margin:"10px"}}>
            {/* {console.log(`props value @ product @ ${props.product.product_name}`,props)} */}
            <img style={{width:"350px",height:"auto"}} src={props.imageSelection} alt="product"/>
            <div>{props.product.product_name}</div>
            <div>${props.product.price}</div>
            <button onClick={()=>props.delete(props.product.id)}>Delete</button>            
            <button onClick={()=>props.handleEdit(props.product)}>Edit</button>            
        </div>
        )
    }