// Dynamically constructs the engine database map from imported script assets
const standDatabase = {
    part4: part4Data,
    part5: part5Data,
    part6: part6Data,
    extras: extrasData
};

function navigateTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function loadStand(name, partKey) {
    const stand = standDatabase[partKey][name];
    
    // Maps keys directly to your local folder name structures
    let folderPrefix = "";
    if (partKey === 'part4') folderPrefix = "images/";
    else if (partKey === 'part5') folderPrefix = "images5/";
    else if (partKey === 'part6') folderPrefix = "images6/";
    else if (partKey === 'extras') folderPrefix = "images_extras/";

    document.getElementById('stand-name').innerText = name;
    document.getElementById('stand-img').src = folderPrefix + stand.image;
    document.getElementById('stand-stats').src = folderPrefix + stand.stats;
    document.getElementById('stand-ref').href = stand.link;
    document.getElementById('stand-power').innerText = stand.power;

    const backButtonContainer = document.getElementById('back-container');
    backButtonContainer.innerHTML = `<button onclick="navigateTo('${partKey}-select')" class="jojo-btn back-btn">BACK TO ROSTER</button>`;

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