import { getProductoModel,getProductoUnicoModel , postProductoModel, updateProductoModel, deleteProductoModel  } from "../models/producto.model.js";
 
export const getAll = async (req, res) =>{
    let data = await   getProductoModel(); 
    res.json({success: true, data: data ,   msg : 'get All'})
}

export async function getProducto (req, res){
    let { id } = req.params;
    let data = await   getProductoUnicoModel(id); 
    res.json({success: true, data: data,   msg : 'get for id'})
}

export async function postProducto (req, res){
    let {nombre, detalle, valor } = req.body;
    let data = await   postProductoModel(nombre, detalle, valor ); 
    res.json({success: true, data: [] ,   msg : data})
}

export async function updateProducto (req, res){
    let id = req.params.id;
    let {nombre, detalle, valor } = req.body;
    let data = await   updateProductoModel(id, nombre, detalle, valor);
    res.json({success: true, data: [] ,   msg : data})
}

export async function deleteProducto (req, res){
    let id = req.params.id;
    let data = await   deleteProductoModel(id);
    res.json({success: true, data: [] ,   msg : data})
}
 