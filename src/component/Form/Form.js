import React, {Component} from 'react'
import defaultImg from '../../images/defaultImg.PNG'
import axios from 'axios'


export default class Form extends Component{
    constructor(){
        super()
        this.state={
            name:``,
            price:0,
            url:``,
            id:``
        }
    }
    componentDidUpdate(prevProps,prevState){
        // console.log("Current Props @ Form",this.props)
        // console.log("Previous Props @ Form",prevProps)
        if(prevProps.currentSelection !== this.props.currentSelection){
            let {id,product_name,price,image_url} = this.props.currentSelection
            // console.log("ComponentDidUpdate @ Form")
            this.setState({
                name:product_name,
                price:price,
                url:image_url,
                id:id
            })
            // console.log("State @ Form after cDU", this.state)
        }
    }

    handleUrlInput(val){
        this.setState({
            url:val
        })
    }
    handleProductNameInput(val){
        this.setState({
            name:val
        })
    }
    handlePriceInput(val){
        this.setState({
            price:val
        })
    }
    handleCancel(){
        this.setState({
            name:``,
            price:0,
            url:``,
            id:``  
        })
    }
    handleAdd(){
        let{name,price,url} = this.state
        axios.post('/api/product',{name,price,url}).then(res => {
            this.setState({
                name:``,
                price:0,
                url:``  
            })
        })
        this.props.refresh()
    }
    handleEditPut = () =>{
        let{id,name,price,url} = this.state
        axios.put(`/api/product/${id}`,{name,price,url}).then(res => {
            console.log("hit @ form after PUT")
            this.setState({
                name:``,
                price:0,
                url:``,
                id:``  
            })
            this.props.refresh()
        })
    }

    render(){
        // console.log("Current State:", this.state)
        let imageSelection = defaultImg
        let {url} = this.state
        if(url){
            imageSelection = url
        }else{
            imageSelection = defaultImg
        }


        return(
            <div>
                <div>
                    <img style={{width:"350px",height:"auto"}} src={imageSelection} alt='item'/><br/>
                </div>
                Image Url:
                    <input onChange={(e)=>this.handleUrlInput(e.target.value)} value={this.state.url}/><br/>
                Product Name:
                    <input onChange={(e)=>this.handleProductNameInput(e.target.value)} value={this.state.name}/><br/>
                Price:
                    $<input type="number" onChange={(e)=>this.handlePriceInput(e.target.value)} value={this.state.price}/><br/>
                <button onClick={()=>this.handleCancel()}>Cancel</button>
                {this.state.id ? 
                (<button onClick={()=>this.handleEditPut()}>Save Changes</button>):
                (<button onClick={()=>this.handleAdd()}>Add to Inventory</button>)}
            </div>
        )

    }
}