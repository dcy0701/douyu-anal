const depUrl = 'http://www.huomao.com/channels/channel.json?page=#page&page_size=120&game_url_rule=all'
let count = 0;
(async function(){
  try {
    await Array.from(Array(7)).reduce((pre,value,page)=>{
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
    subUrl = depUrl.replace('#page',page)
    const metadata = await fetch(subUrl)
    const pagedata = await metadata.json(subUrl)
    const outnumber = pagedata.data.channelList

    const all = outnumber
    .map((value,index)=>parseInt(value.views.replace('万','00').replace('.','')))
    .reduce((pre,cur)=>pre+cur,0)
    count += all
}
