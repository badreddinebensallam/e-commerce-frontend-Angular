import { useEffect } from 'react'
import { useState } from 'react'
import productService from '../service/productService'

function ProductList(){
    /* On va envoyer une requete de type get puis récuperer les résultats qu'on va les stockés
     dans products puis on va les afficher dans tbody */
    const [products,setProducts]=useState([])
    useEffect(()=>{
        getProducts()
    },[]) // pour éviter un traitement infini
    async function getProducts(){
        const result=await productService.getAllProducts() // envoyer une req get pour récupérer la liste des produits
        setProducts(result.data)
        console.log(result.data)
    }
    async function deleteProd(id){
        const result=await productService.deleteProduct(id)
        getProducts()
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                products.map((elem,index)=>{
                    return <tr key={index}>
                        <td> {index+1}</td>
                        <td> {elem.name}</td>
                        <td> {elem.description}</td>
                        <td> {elem.price}</td>
                        <td><button onClick={event=>deleteProd(elem._id)}>Supprimer</button></td>
                    </tr>

                })
            }
            </tbody>
        </table>
    )
}
export default ProductList


