/* eslint-disable class-methods-use-this */
class LocalStorage {
  get(name) {
    return JSON.parse(localStorage.getItem(`cache-${name}`))
  }

  put(name, value) {
    localStorage.setItem(`cache-${name}`, JSON.stringify(value))
  }

  remove(name) {
    localStorage.removeItem(`cache-${name}`)
    return name
  }
}

export default new LocalStorage()

