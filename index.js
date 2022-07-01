 function format(datePass,format){
   let date = new Date(datePass)
   if(date == 'Invalid Date'){
      let dateSplit = datePass.split(/[, /-]/)
      console.log(dateSplit)
      date=`${dateSplit[1]}-${dateSplit[0]}-${dateSplit[2]}`
   }
   if(date == 'Invalid Date'){
      return "Invalid Date"
   }else{

      if(format=='Mon-DD-YYYY'){
         const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
         const d = new Date(date);
         let dd = String(d.getDate()).padStart(2, '0');
         let mm = String(d.getMonth() + 1).padStart(2, '0');
         let yyyy = d.getFullYear();
         let fullDate =`${months[d.getMonth()]}-${dd}-${yyyy}`
         return fullDate;
      }
      else if(format=='MON-DD-YYYY'){
         const months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    const d = new Date(date);
    let dd = String(d.getDate()).padStart(2, '0');
    let mm = String(d.getMonth() + 1).padStart(2, '0');
    let yyyy = d.getFullYear();
    let fullDate =`${months[d.getMonth()]}-${dd}-${yyyy}`
    return fullDate;
   }
   else if(format=='MONTH-DD-YYYY'){
    const months=['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    const d = new Date(date);
    let dd = String(d.getDate()).padStart(2, '0');
    let mm = String(d.getMonth() + 1).padStart(2, '0');
    let yyyy = d.getFullYear();
    let fullDate =`${months[d.getMonth()]}-${dd}-${yyyy}`
    return fullDate;
   }
   else if(format=='Month-DD-YYYY'){
      const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const d = new Date(date);
      let dd = String(d.getDate()).padStart(2, '0');
      let mm = String(d.getMonth() + 1).padStart(2, '0');
      let yyyy = d.getFullYear();
      let fullDate =`${months[d.getMonth()]}-${dd}-${yyyy}`
      return fullDate;
   }
   
}
}
console.log(format('20 01-2012','Mon-DD-YYYY'))