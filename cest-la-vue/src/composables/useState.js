import { ref } from "vue"

export const useState = () => {
  const state = ref(0)

  const setState = (newState) => {
    state.value = newState
  }

  return {
    state,
    setState
  }
}