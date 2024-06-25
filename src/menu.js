function menu(bc, kh, pp, pv){
    const toadd = document.createElement('div');
    toadd.classList.add('menugrid')
    const title = document.createElement('h1');
    title.innerText = 'Menu'

    const bcimg = new Image();
    bcimg.src = bc;
    const khimg = new Image();
    khimg.src = kh;
    const ppimg = new Image();
    ppimg.src = pp;
    const pvimg = new Image();
    pvimg.src = pv;


    const divgrid = document.createElement('div')
    divgrid.classList.add('divgrids')


    const fig1 = document.createElement('figure')
    fig1.appendChild(bcimg)
    const bccap = document.createElement('figcaption')
    bccap.innerText = "Butter Chicken - $20"
    fig1.appendChild(bccap)

    const fig2 = document.createElement('figure')
    fig2.appendChild(ppimg)
    const ppcap = document.createElement('figcaption')
    ppcap.innerText = "Palak Panner - $15"
    fig2.appendChild(ppcap)

    const fig3 = document.createElement('figure')
    fig3.appendChild(pvimg)
    const pvcap = document.createElement('figcaption')
    pvcap.innerText = "Pulov - $15"
    fig3.appendChild(pvcap)

    const fig4 = document.createElement('figure')
    fig4.appendChild(khimg)
    const khcap = document.createElement('figcaption')
    khcap.innerText = "Kheer - $15"
    fig4.appendChild(khcap)
    divgrid.appendChild(title);
    divgrid.appendChild(fig1);
    divgrid.appendChild(fig2);
    divgrid.appendChild(fig3);
    divgrid.appendChild(fig4);

    
    toadd.appendChild(divgrid);
    return toadd
}

export {menu}