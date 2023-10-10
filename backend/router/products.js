const Products = require("../models/Products");
const User = require("../models/User");
const router = require("express").Router();
 
router.post("/products",async(req,res)=>{
    const pro =  new Products(req.body)
    console.log(req.body)
    try{
        const products = await   pro.save()
        res.status(200).json(products); 
    }
    catch(err)
    {
        res.status(400).json(err)
    }
})


router.delete("/products/:id",async(req,res)=>{
    try{
      await Products.findByIdAndDelete(req.params.id)
      res.json("deleting ....").status(200)
    }
    catch(err)
    {
        res.status(400).json(err)
    }
})

router.get("/products",async (req,res)=>{
    const cat = req.query.cat;
    const sub = req.query.sub;
    let products;
    try{
        if(cat)
        {
            products = await Products.find({categories:{
                $in:[cat],
            }})
        }
        else if(sub)
        {
            products = await Products.find({subCategories:{
                $in :[sub]
            }})
        }else{
            products = await Products.find()
        }
        res.status(200).json(products)
    }catch(err){
        res.status(500).json("something is wrong")
        
    }
})


module.exports = router;
