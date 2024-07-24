import axios from 'axios'
async function getAllProducts(){
    return await axios.get("http://localhost:4545/products")
}

async function deleteProduct(id){
    return await axios.delete(`http://localhost:4545/products/${id}`)
 }

 const productService={getAllProducts,deleteProduct}
 export default productService;
 
