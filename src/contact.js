export function contact(){
    const toadd = document.createElement('div');
    const title = document.createElement('h1');
    title.innerText = 'Contact Us'


    toadd.appendChild(title)
    const description = document.createElement('p')
    description.textContent = "Phone Number : +1223456789"

    const description2 = document.createElement('p')
    description2.innerHTML = "41 Broad Street"

    const description3 = document.createElement('p')
    description3.textContent = "           MA United States"

    toadd.appendChild(description)
    toadd.appendChild(description2)
    toadd.appendChild(description3)
    return toadd
}