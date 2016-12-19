import fetch from 'node-fetch'
const depUrl = 'https://www.douyu.com/directory/all?isAjax=1&page='

let count = 0;

(async function(){
  await Array.from(Array(50)).reduce((pre,value,page)=>{
      return pre.then(()=>{
          return fetchCount(page+1)
      })
  },Promise.resolve())

  console.log(count)
})()

async function fetchCount(page){
    const metadata = await fetch(depUrl+page)
    const pagedata = await metadata.text()
    const outnumber = pagedata.match(/"dy-num fr"\s*\>[\d\.]*万*/g);

    const all = outnumber
    .map((value,index)=>{
      value = value.replace('万','000').replace('.','')
      return parseInt(value.slice(value.lastIndexOf('>')+1))
    })
    .reduce((pre,cur)=>pre+cur,0)
    count += all
}
