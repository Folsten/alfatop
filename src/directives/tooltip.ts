export function TooltipDirective(el: any, binding: any): void {
  el.setAttribute('data-tooltip', binding.value?.text || binding.value)
  el.classList.add('with-tooltip')

  if (binding.modifiers.top) {
    el.classList.add('tooltip-top')
  } else if (binding.modifiers.bottom) {
    el.classList.add('tooltip-bottom')
  } else if (binding.modifiers.left) {
    el.classList.add('tooltip-left')
  } else if (binding.modifiers.right) {
    el.classList.add('tooltip-right')
  }
}
