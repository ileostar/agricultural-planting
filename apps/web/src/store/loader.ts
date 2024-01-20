export default defineStore('loader', () => {
  const className = ref({
    loading_out: false
  })

  function PageIn(next: () => void) {
    className.value.loading_out = false
    setTimeout(() => {
        next();
        checkLoading();
    }, 1000);
  }
  function PageOut() {
    className.value.loading_out = true
  }
  function checkLoading() {
    let timer = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(timer);
            PageOut();
        }
    }, 100);
  }

  return {
    className,
    PageIn,
    PageOut
  }
})
