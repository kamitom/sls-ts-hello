const foo1: string = 'foo100'
const foo2: string = '200foo'

let jpLanguageLength: string = '天皇陛下、亀井静香さんらに大綬章手渡す'

//fix: Module 'xxx' has no default export.
export default { foo1, foo2 }
export { jpLanguageLength as showJpLanguageLength }
