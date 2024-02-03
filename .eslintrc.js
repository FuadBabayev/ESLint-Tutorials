module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
        {
            'env': {    
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {                                               // * warn, error, off
        'consistent-return' : 'error',                       // * Functions doesnt has return value
        'no-console' : 'warn',                               // * When use console.log()
        'no-unused-vars': 'error',                           // * When use variables but never declared
        'no-debugger': 'error',                              // * When use debugger
        'eqeqeq': 'warn',                                    // * When use == instead of ===
        'indent': ['warn', 4],                               // * Indent is not appropirate 
        'linebreak-style': ['error', 'windows'],             // * When linebreak-style not correct
        'quotes': ['error', 'single'],                       // * When not use Single Quotes
        'semi': ['error', 'always'],                         // * When not use Semi colons end of line
        'max-depth': ['warn', 4],                            // * Enforces a maximum depth nested blocks (İç içe max 4 block)
        'max-params': ['error', 3],                          // * Enforces a maximum number of parameters in function definitions
        'max-lines': ['error', 300],                         // * Enforces a maximum number of lines in a FILE
        'no-multiple-empty-lines' : ['warn', { 'max': 2 }],  // * En fazla 2 ardışık boş satıra line-break </br> izin verir
        'complexity': ['error', 10]                          // * Enforce a maximum cyclomatic complexity allowed in a program
    }
};
