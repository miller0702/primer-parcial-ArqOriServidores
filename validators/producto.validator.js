import { checkSchema } from  'express-validator';

export const postProductoValidator = checkSchema({
    nombre: {
      errorMessage: 'Usuario invalido',
      notEmpty: true,
      isLength: {
        options: { min: 3 },
        errorMessage: 'El nombre debe tener minimo tres caracteres',
      },
    },
    valor: {
      matches : { options : /[0-9]/},
      errorMessage: 'la cantidad debe ser un múmero'
    }
} ,["body"]);

export const updateProductoValidator = checkSchema({
  nombre: {
    errorMessage: 'El nombre del producto es obligatorio',
    notEmpty: true,
    isLength: {
      options: { min: 3 },
      errorMessage: 'El nombre debe tener minimo tres caracteres',
    },
  },
  valor: {
    matches: { options: /[0-9]/ },
    errorMessage: 'La cantidad debe ser un número',
  },
}, ["body"]);

export const deleteProductoValidator = checkSchema({
}, ["body"]);