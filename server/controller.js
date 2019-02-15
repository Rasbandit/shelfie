module.exports={
    getInv: (req,res) => {
        const db = req.app.get('db')
        db.get_inv().then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    },
    createProduct: (req,res) => {
        const db = req.app.get('db')
        let {name, price, url} = req.body
        db.create_product(name,price,url).then(response => {
            res.status(200).send(response)
        }).catch(err=>console.log(err))
    },
    deleteProduct: (req,res) =>{
        const db = req.app.get('db')
        let {id} = req.params
        // console.log(req.params)
        db.delete_product(id).then(response=>{
            res.status(200).send(response)
        }).catch(err=>console.log(err))
    },
    editProduct: (req,res) => {
        const db = req.app.get('db')
        let {id} = req.params
        let {name, price, url} = req.body
        db.update_product(id,name,price,url).then(response => {
            res.status(200).send(response)
        }).catch(err=>console.log(err))
    }
}