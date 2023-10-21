export function Remove() {
    const removeData = localStorage.removeItem('data')

    setTimeout(() => {
        window.location.reload()
    }, 200)

    return removeData
}