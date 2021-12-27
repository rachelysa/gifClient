
import axios from 'axios';
var prevSearch=[];
export const gifService = {
  search,
  addSearch,
  

}

function search(search) {
 
  return axios.get(`https://localhost:44325/api/giphy/${search}`)

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
