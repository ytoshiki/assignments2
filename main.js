const nativeSelect = document.querySelector(".native-select")
const customSelect = document.querySelector(".custom-select")
const options = nativeSelect.querySelectorAll("option")
let storedOptions = []
const pickBtn = document.querySelector(".pick")

document.addEventListener("DOMContentLoaded", () => {
  storeOptions()
  hideOptions()
})

nativeSelect.addEventListener("click", () => {
  addOptions()
  customSelect.classList.toggle("visible")
  if (customSelect.className.includes("visible")) {
    customSelect.style.transform = "scale(1)"
  } else {
    customSelect.style.transform = "scale(0)"
  }
  nativeSelect.parentNode.removeChild(nativeSelect)

  console.log(storedOptions)

  storedOptions.forEach(option => {
    option.addEventListener("click", () => {
      pickBtn.textContent = option.textContent
    })
  })
})

const storeOptions = () => {
  if (!customSelect.children.length) {
    options.forEach(option => {
      const div = document.createElement("div")
      div.innerText = option.textContent
      storedOptions.push(div)
    })
  }
}

const hideOptions = () => {
  const nativeOptions = nativeSelect.children
  Array.from(nativeOptions).forEach(option => {
    nativeSelect.removeChild(option)
  })
}

const addOptions = () => {
  storedOptions.forEach(option => {
    customSelect.appendChild(option)
  })
  pickBtn.style.display = "block"
}

pickBtn.addEventListener("click", () => {
  customSelect.classList.toggle("visible")
  if (customSelect.className.includes("visible")) {
    customSelect.style.transform = "scale(1)"
  } else {
    customSelect.style.transform = "scale(0)"
  }
})
