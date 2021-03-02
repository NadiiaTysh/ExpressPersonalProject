export const customerSchema = {
    type:       'object',
    properties: {
        name: {
            first: {
                type:      'string',
                minLength: 3,
            },
            last: {
                type:      'string',
                minLength: 3,
            },
        },
        phones: {
            type:  'array',
            phone: {
                type: 'string',
            },
            primary: {
                type: 'boolean',
            },
        },
        emails: {
            type:  'array',
            email: {
                type:   'string',
                format: 'email',
            },
            primary: {
                type: 'boolean',
            },
        },
        password: {
            type: 'string',
        },
        city: {
            type: 'string',
        },
        country: {
            type: 'string',
        },
    },
    required:             [ 'name', 'emails', 'phones' ],
    additionalProperties: false,
};
