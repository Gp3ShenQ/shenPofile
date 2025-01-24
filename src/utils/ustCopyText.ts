export const copyText = (text: string): void => {
  const el = document.createElement('textarea')
  el.value = text
  document.body.appendChild(el)

  el.style.position = 'absolute'
  el.style.opacity = '0'

  el.select()
  document.execCommand('copy')

  document.body.removeChild(el)
}
