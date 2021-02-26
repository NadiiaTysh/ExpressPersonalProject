export const staffSchema = {
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
        role: {
            type: 'string',
        },
        disabled: {
            type: 'boolean',
        },
    },
    required:             [ 'name', 'emails', 'phones', 'password', 'role' ],
    additionalProperties: false,
};
