import fetch from 'node-fetch'

const depUrl = 'https://www.douyu.com/directory/all?isAjax=1&page='

Array.from(Array(50/5)).reduce((pre,value,page)=>{
    return pre.then(()=>{
        return
    })
},Promise.reslove())
// 先获取总的页数  暂定50页

async fetchCount(page){
    const metadata = await fetch(depUrl+page)
    const pagedata = await metadata.text()
}
