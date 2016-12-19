const depUrl = 'http://www.panda.tv/live_lists?status=2&order=person_num&token=c9f2676dc81d5b9a30756933f9def936&pagenum=120&_=1482059389421&pageno='
let count = 0;
(async function(){
  try {
    await Array.from(Array(25)).reduce((pre,value,page)=>{
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
    const metadata = await fetch(depUrl+page)
    const pagedata = await metadata.json()
    const outnumber = pagedata.data.items

    const all = outnumber
    .map((value,index)=>parseInt(value.person_num))
    .reduce((pre,cur)=>pre+cur,0)
    count += all
    console.log(count);
}
