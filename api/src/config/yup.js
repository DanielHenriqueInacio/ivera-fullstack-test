import * as Yup from 'yup';

Yup.setLocale({
    string: {
        email: 'Preencha um email válido',
        min: '${path}: valor muito curto (mínimo ${min} caracteres)',
        max: '${path}: valor muito longo (máximo ${max} caracteres)',
        matches: '${path}: valor inválido, verifique o formato esperado',
        length: '${path}: deve conter exatamente ${length} caracteres',
    },
    mixed: {
        required: '${path} é um campo obrigatório',
        oneOf: '${path} deve ser um dos seguintes valores [${values}]',
    },
});

export default Yup;