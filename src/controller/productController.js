const { isValidObjectId } = require('mongoose')
const productModel = require('../Model/productModel')
const {isValidImg , isValidPrice , checkSize, ValidTitle,isValidTitle } = require('../validation/validation')
const {uploadFile} = require('../aws/aws')

const creatProduct = async (req,res)=> {
    try{
        let data = req.body
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "please give me some data" })  

        let product_image = req.files
        if(!product_image[0]) return res.status(400).send({ status: false, message: "please provide product_image" })
        if(!isValidImg(product_image[0].originalname)){ return res.status(400).send({ status: false, message: "Image Should be of JPEG/ JPG/ PNG",  }) }

        let { title, description, price,currencyId, currencyFormat,availableSizes } = data
        if(!title) return res.status(400).send({ status: false, message: "please give title" })
        let uniqueTitle = await productModel.findOne({title})
        if(uniqueTitle) return res.status(400).send({ status: false, message: "title should be unique" })
        if(!description) return res.status(400).send({ status: false, message: "please give description" })
        if(!price) return res.status(400).send({ status: false, message: "please give price" })
        if(!currencyId) return res.status(400).send({ status: false, message: "please give currencyId" })
        if(!currencyFormat) return res.status(400).send({ status: false, message: "please give currencyFormat" })

        let size = availableSizes.split(' ')
        availableSizes = size

        if(!ValidTitle(title)) return res.status(400).send({ status: false, message: "please provide valid title" })
        if(!isValidPrice(price)) return res.status(400).send({ status: false, message: "please provide valid price" })
        if(!checkSize(availableSizes)) return res.status(400).send({ status: false, message: 'please provide only  this /"S"/"XS"/"M"/"X"/"L"/"XXL"/"XL"] Size '} )
        if(currencyId !== "INR") return res.status(400).send({ status: false, message: "please provide 'INR' " })
        if(currencyFormat !== "₹") return res.status(400).send({ status: false, message: "please provide  '₹' " })


        let url = await uploadFile(product_image[0])
        data["productImage"] = url
        let product = await productModel.create(data)
        return res.status(201).send({ status: true, message: "Product is successfully created",data: product,
        })


    }catch(err){
     return res.status(500).send({status : false , message : err.message})
    }
}

const getProduct = async (req, res) => {
    try {
        let fillTers = req.query
        fillTers.isDeleted = false
        const { name, priceGreaterThan, priceLessThan, size, priceSort } = fillTers
        if (name) {
            if (!isValidTitle(name)) return res.status(400).send({ status:false,message: "invalid product name" })
        }
        
        if (priceGreaterThan != undefined){
        if ( typeof (parseInt(priceGreaterThan)) == NaN) return res.status(400).send({ status:false,message: "ivalid product priceGreater Than cap" })
        }
        if(priceLessThan != undefined){
        if (typeof (priceLessThan) == String) return res.status(400).send({status:false, message: "ivalid product priceless Than cap" })
        }
        if(size!=undefined){
        if (!["S", "XS", "M", "X", "L", "XXL", "XL"].includes(size)) return res.status(400).send({status:false, message: "This size is not available" })
        }
        
        if(priceSort!=undefined){
        if (parseInt(priceSort) != -1 && parseInt(priceSort) != 1) return res.status(400).send({ message: "for sorting provide 1 for accending and -1 for deccending order" })
        delete fillTers.priceSort
        }
        
        if (priceLessThan && priceGreaterThan==undefined) {
            fillTers.price = { $lt: priceLessThan }
            delete fillTers.priceLessThan
        }
        
        if (priceGreaterThan && priceLessThan==undefined) {
            fillTers.price = { $gt: priceGreaterThan }
            delete fillTers.priceGreaterThan
        }
        
        if(name){
            fillTers.title = name
            delete fillTers.name
        }
        if(size){
            fillTers.availableSizes=size
            delete fillTers.size
        }
        
        if (priceGreaterThan && priceLessThan) {
            fillTers.price = { $gt: priceGreaterThan, $lt: priceLessThan }
            delete fillTers.priceGreaterThan
            delete fillTers.priceLessThan
            
        }
        

        const toSend = await productModel.find(fillTers).sort({ price: parseInt(priceSort) })
        if(toSend.length==0){return res.status(404).send({status:false,message:"No products found"})}
        res.status(200).send({ status: true, message: "success", data: toSend })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }

    

}


const getProductById = async (req,res)=>{
    try{
        let productId = req.params.productId
        if(!productId) return res.status(400).send({ status: false, message: "please provide productId" })
        if(!isValidObjectId(productId)) return res.status(400).send({ status: false, message: "please provide valid productId" })

        let  productData = await productModel.findById(productId)
        if(!productData) return res.status(404).send({ status: false, message: "Product Not Found" })

        return res.status(200).send({status : true, data : productData })

        }catch(err){
        return res.status(500).send({status : false , message : err.message})
        }
}
module.exports = { creatProduct , getProductById ,getProduct}