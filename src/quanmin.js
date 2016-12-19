const depUrl = 'http://www.quanmin.tv/json/play/list_page.json?_t=201612192224'
let count = 0;
(async function(){
  try {
    await Array.from(Array(10)).reduce((pre,value,page)=>{
        return pre.then(()=>{
            return fetchCount(page)
        })
    },Promise.resolve());
  } catch (e) {
    console.log(e);
  }
  console.log(count)
})()

async function fetchCount(page){
    let subUrl = ''
    if(page==0) {
       subUrl = depUrl.replace('_page','')
    }else {
       subUrl = depUrl.replace('page',page)
    }
    const metadata = await fetch(subUrl)
    const pagedata = await metadata.json(subUrl)
    const outnumber = pagedata.data

    const all = outnumber
    .map((value,index)=>parseInt(value.view))
    .reduce((pre,cur)=>pre+cur,0)
    count += all
}
