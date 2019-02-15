import React, {Component} from 'react'
import Product from '../Product/Product'
import defaultImg from '../../images/defaultImg.PNG'
import axios from 'axios'


export default class Dashboard extends Component{
    
    handleDelete =(id) => {
        axios.delete(`/api/product/${id}`).then(() =>{
            this.props.refresh()
        })
    }

    render(){
        // console.log("Props @ Dash",this.props)

        let mappedInv = this.props.inventory.map((product) => {
            let {id} = product
            let imageSelection = defaultImg
            let {image_url:url} = product
            if(url){
                imageSelection = url
            }else{
                imageSelection = defaultImg
            }
            return(
                <Product key={id} product={product} imageSelection={imageSelection} 
                delete={this.handleDelete} handleEdit={this.props.handleEdit}/>
            )
        })
        return(
            <div>
                {mappedInv}
                {/* <button onClick={()=>console.log("Props @ Dash2",this.props)}>click</button> */}
            </div>
        )

    }
}