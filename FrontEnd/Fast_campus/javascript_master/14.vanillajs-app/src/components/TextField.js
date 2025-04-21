import { Component } from '../core/Core'
import messageStore from '../store/message'

export default class TextField extends Component {
  render() {
    this.el.innerHTML = `
      <input value="${messageStore.state.message}" />  <!-- getter 실행 -->
    `
    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      messageStore.state.message = inputEl.value       // setter 실행, inputEl.value를 messageStore의 state.message로 전달
    })
  }
}
