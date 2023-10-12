function openFullscreen() {
    elem = document.body;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }



Array.from(document.querySelectorAll('.option>button')).forEach((ele)=>{
    ele.addEventListener('click',()=>{
        // openFullscreen();
        window.open(ele.dataset.href,'_blank',`height=${screen.height},width=${screen.width}`);
    })
})

