function carousel() {
    return {
      active: 0,
      init() {
        var flkty = new Flickity(this.$refs.carousel, {
          wrapAround: true
        });
        flkty.on('change', i => this.active = i);
      }
    }
  }
  
  function carouselFilter() {
    return {
      active: 0,
      changeActive(i) {
        this.active = i;
        
        this.$nextTick(() => {
          let flkty = Flickity.data( this.$el.querySelectorAll('.carousel')[i] );
          flkty.resize();
          
          console.log(flkty);
        });
      }
    }
  }
  
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
  
  
  
  Array.from(document.querySelectorAll('img.options')).forEach((ele)=>{
      ele.addEventListener('click',()=>{
          // openFullscreen();
          abc = window.open(ele.dataset.href,'_blank',`height=${screen.height},width=${screen.width}`);
          // setTimeout(()=>{
          //   abc.location.reload();
          // },2000)
      })
  })