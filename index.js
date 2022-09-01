import _index from './source/index.js'
document.querySelector('.root').innerHTML = _index.index

const _testBtn = document.querySelector('.testBtn')
_testBtn.onclick = () => {
    console.log('11111111')
}