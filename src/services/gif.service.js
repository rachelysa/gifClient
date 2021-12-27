
import axios from 'axios';
import {giphyService} from './services/giphy.service'
import {GagService} from './services/9Gag .service'
var prevSearch=[];
var API='Giphy' //Giphy or 9GAG as the only need-change to switch to another API
export const gifService = {
  search,
  addSearch,
  

}

function search(searchTerm) {
 if(API==='Giphy')
  return giphyService.search(searchTerm).then(res=>{
             var urls= res.data.map(item=>{return item.images.original.webp});
             return urls;
  })
  else GagService.search(searchTerm).then(res=>{
//Returns an array with URL only as above
  })

}

function addSearch(search) {
  //את כל הקטע של חיפושים שמורים הייתי עושה שימוש בבסיס נתונים
 var reapit=false
  prevSearch.forEach(prevs=>{   
    if(prevs.value===search){
     reapit=true;
      return
    } 
  })
  if(reapit) return 
  prevSearch.push({'label':search,'value':search});

  return prevSearch
}
