const copyBtn = document.querySelector('.copy__code')

copyBtn.addEventListener('click', () => {
  const text = document.querySelector('.code__text').innerHTML.toUpperCase()
  navigator.clipboard.writeText(text)
    .then( r => {
      console.log('promo copied')
    })
})