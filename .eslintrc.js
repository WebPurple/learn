module.exports =  {
  parser:  '@typescript-eslint/parser',  
  extends:  [
    'plugin:react/recommended',  
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions:  {
  ecmaVersion:  2019,  
  sourceType:  'module',
  ecmaFeatures:  {
    jsx:  true,
  },
  },
  rules:  {
    "react/prop-types": 0
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
  "overrides": [
    {
        "files": ["gatsby-config.js"],
        "rules": {
          "@typescript-eslint/no-var-requires": "off",
          "@typescript-eslint/explicit-function-return-type": "off",
        }
    }
]
};