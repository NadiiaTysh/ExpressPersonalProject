export const orderSchema = {
    type:       'object',
    properties: {
        uid: {
            type: 'string',
        },
        pid: {
            type: 'string',
        },
        count: {
            type: 'number',
            min:  0,
        },
        comment: {
            type: 'string',
        },
    },
    required:             [ 'uid', 'pid', 'count' ],
    additionalProperties: false,
};
