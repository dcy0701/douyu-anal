const depUrl = 'http://www.zhanqi.tv/api/static/v2.1/live/list/30/page.json'
let count = 0;
(async function(){
  try {
    await Array.from(Array(50)).reduce((pre,value,page)=>{
        return pre.then(()=>{
            return fetchCount(page+1)
        })
    },Promise.resolve());
  } catch (e) {
    console.log(e);
  }
  console.log(count)
})()

async function fetchCount(page){
    let subUrl = ''
    subUrl = depUrl.replace('page',page)
    const metadata = await fetch(subUrl)
    const pagedata = await metadata.json(subUrl)
    const outnumber = pagedata.data.rooms

    const all = outnumber
    .map((value,index)=>parseInt(value.online))
    .reduce((pre,cur)=>pre+cur,0)
    count += all
}
