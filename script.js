const standDatabase = {
    part4: typeof part4Data !== 'undefined' ? part4Data : {},
    part5: typeof part5Data !== 'undefined' ? part5Data : {},
    part6: typeof part6Data !== 'undefined' ? part6Data : {},
    extras: typeof extrasData !== 'undefined' ? extrasData : {}
};

function navigateTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const targetScreen = document.getElementById(id);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

function loadStand(name, partKey) {
    // Exact structural matching check
    if (!standDatabase[partKey] || !standDatabase[partKey][name]) {
        alert("Error: Stand data could not be located!");
        return;
    }

    const stand = standDatabase[partKey][name];
    
    let folderPrefix = "";
    if (partKey === 'part4') folderPrefix = "images/";
    else if (partKey === 'part5') folderPrefix = "images5/";
    else if (partKey === 'part6') folderPrefix = "images6/";
    else if (partKey === 'extras') folderPrefix = "images_extras/";

    let finalImgSrc = (stand.image && stand.image.includes('/')) ? stand.image : folderPrefix + (stand.image || "");
    let finalStatsSrc = (stand.stats && stand.stats.includes('/')) ? stand.stats : folderPrefix + (stand.stats || "");

    document.getElementById('stand-name').innerText = name;
    document.getElementById('stand-img').src = finalImgSrc;
    document.getElementById('stand-stats').src = finalStatsSrc;
    document.getElementById('stand-ref').href = stand.link || "https://www.youtube.com";
    document.getElementById('stand-power').innerText = stand.power || "";

    const backButtonContainer = document.getElementById('back-container');
    if (partKey === 'extras') {
        backButtonContainer.innerHTML = `<button onclick="navigateTo('storage-select')" class="jojo-btn back-btn">BACK TO STORAGE</button>`;
    } else {
        backButtonContainer.innerHTML = `<button onclick="navigateTo('${partKey}-select')" class="jojo-btn back-btn">BACK TO ROSTER</button>`;
    }

    navigateTo('stand-profile');
}

function checkExtrasPassword() {
    const passwordInput = prompt("Enter Password to view Hidden Extras:");
    if (passwordInput === "PizzaMozarella") {
        navigateTo('extras-menu');
    } else if (passwordInput !== null) {
        alert("WRONG! You triggered Killer Queen's 3rd bomb, Bites The Dust!");
    }
}