// Uma factory retorna um novo objeto

module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value++
        }
    }
}

// Importado no arquivo clientInstance.js
