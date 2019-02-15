import React from 'react'

export default function Product(props){
    return(
        <div style={{borderRadius:"5px", height:"350px", width:"400px", margin:"10px", background:"#D34735"}}>
            {/* {console.log(`props value @ product @ ${props.product.product_name}`,props)} */}
            <img style={{margin:"10px",width:"350px",height:"auto"}} src={props.imageSelection} alt="product"/>
            <div>{props.product.product_name}</div>
            <div>${props.product.price}</div>
            <button style={{background:"#3AD886", borderRadius:"5px"}} onClick={()=>props.delete(props.product.id)}>Delete</button>            
            <button style={{background:"#3AD886", borderRadius:"5px"}} onClick={()=>props.handleEdit(props.product)}>Edit</button>            
        </div>
        )
    }