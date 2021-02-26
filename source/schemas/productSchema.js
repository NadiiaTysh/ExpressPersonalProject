export const productSchema = {
    type:       'object',
    properties: {
        title: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        price: {
            type: 'number',
            min:  0,
        },
        discount: {
            type: 'number',
            min:  0,
            max:  50,
        },
        total: {
            type: 'number',
        },
    },
    required:             [ 'title', 'price', 'total' ],
    additionalProperties: false,
};
