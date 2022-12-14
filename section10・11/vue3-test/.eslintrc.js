module.exports = {
  root: true,
  env: {
    node: true
  },
  globals : {
    "defineProps": "readonly",
    "defineEmits": "readonly",
    "defineExpose": "readonly",
    "withDefaults": "readonly",
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/multi-word-component-names': [
        'error',
        {
            ignores: ['Children'],
        },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
