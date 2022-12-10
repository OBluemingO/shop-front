export const check_element_on_viewport = (rect) => {
  if (
    rect?.top + (rect?.height/2) > 0 &&
    rect?.left + (rect?.width/2) > 0 &&
    rect?.top + (rect?.height/2) < (window.innerHeight || document.documentElement.clientHeight) &&
    rect?.left + (rect?.width/2) < (window.innerWidth || document.documentElement.clientWidth)
  ) return true 
  else return false
  
}