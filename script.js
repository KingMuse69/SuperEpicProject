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
    const passwordInput = prompt("Enter Password to view Hidden Extras(Hint: It's a food that Gyro sings about):");
    if (passwordInput === "PizzaMozarella") {
        navigateTo('extras-menu');
    } else if (passwordInput !== null) {
        alert("WRONG! You triggered Killer Queen's 3rd bomb, Bites The Dust!");
    }
}
// Sonic.exe / FNF Style Hidden Code Engine Execution Mapping
function executeVaultCode() {
    const code = document.getElementById('vault-console').value.trim();
    const sandbox = document.getElementById('lab-sandbox');
    
    // Clear console input area
    document.getElementById('vault-console').value = "";

    switch (code) {
        case "PurpleFeedback":
            sandbox.innerHTML = `<p style='color: gold;'>Unlocking Knowledge Realm... Forwarding to Audio Novel Archive.</p>`;
            window.open("https://www.youtube.com/watch?v=Kwf_gaEQpJY&t=228s", "_blank");
            break;

        case "GreatestSecret":
            sandbox.innerHTML = `<p style='color: gold;'>Accessing Ultimate Ancient Wisdom...</p>`;
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
            break;

        case "MemeStream":
            if (!window.activeMemeGen) window.activeMemeGen = ExtrasLabModules.memeGenerator();
            sandbox.innerHTML = `
                <h4>Lab 1: Infinite Generator Logic</h4>
                <button onclick="document.getElementById('gen-out').innerText = window.activeMemeGen.next().value" class="jojo-btn" style="min-width:180px; padding:5px;">Next Element</button>
                <p id="gen-out" style="color: cyan; margin-top:10px; font-size:1.5rem;">Click to cycle iterator strings.</p>`;
            break;

        case "SpeedwagonCache":
            const expensiveComputation = (num) => num * num * 9999;
            window.cachedCalc = ExtrasLabModules.memoize(expensiveComputation);
            sandbox.innerHTML = `
                <h4>Lab 2: Memoization Matrix</h4>
                <input type="number" id="memo-in" value="5" style="padding:5px; text-align:center;">
                <button onclick="
                    const res = window.cachedCalc(Number(document.getElementById('memo-in').value));
                    document.getElementById('memo-out').innerHTML = 'Result: ' + res.value + '<br>Loaded from cache? ' + res.cached;
                " class="jojo-btn" style="min-width:150px; padding:5px;">Compute</button>
                <p id="memo-out" style="color: chartreuse; margin-top:10px;"></p>`;
            break;

        case "StandBattleQueue":
            window.battleQueue = new ExtrasLabModules.BiDirectionalPriorityQueue();
            window.battleQueue.insert("Koichi (Echoes)", 3);
            window.battleQueue.insert("Jotaro (Star Platinum)", 1);
            window.battleQueue.insert("Okuyasu (The Hand)", 2);
            sandbox.innerHTML = `
                <h4>Lab 3: Bi-Directional Priority Queue</h4>
                <p>Initial Queue Loaded: Jotaro (Speed 1), Okuyasu (Speed 2), Koichi (Speed 3)</p>
                <button onclick="document.getElementById('pq-out').innerText = 'Popped Fastest: ' + window.battleQueue.popHighest()?.element" class="jojo-btn" style="padding:5px; min-width:120px;">Pop Front</button>
                <button onclick="document.getElementById('pq-out').innerText = 'Popped Slowest: ' + window.battleQueue.popLowest()?.element" class="jojo-btn" style="padding:5px; min-width:120px;">Pop Rear</button>
                <p id="pq-out" style="color: orange; margin-top:10px; font-weight:bold;"></p>`;
            break;

        case "DioStream":
            sandbox.innerHTML = `<h4>Lab 4: Async Data Streams</h4><p id='stream-log'>Beginning sequential async time frame pipeline iteration...</p>`;
            (async () => {
                const dummyChunks = ["0.5s", "1.0s", "2.0s", "5.0s (Max Limit)"];
                const iterator = ExtrasLabModules.processTimeStopChunks(dummyChunks);
                for await (const chunkLog of iterator) {
                    document.getElementById('stream-log').innerHTML += `<br><span style='color:yellow;'>${chunkLog}</span>`;
                }
            })();
            break;

        case "MoriohRadio":
            window.radioBroadcaster = new ExtrasLabModules.EventEmitter();
            window.radioBroadcaster.on('broadcast', (data) => {
                document.getElementById('radio-output').innerText = `[Morioh Cho Radio]: ${data}!!`;
            });
            sandbox.innerHTML = `
                <h4>Lab 5: Reactive Event Emitters</h4>
                <button onclick="window.radioBroadcaster.emit('broadcast', 'Good Morning! Neighbor Dead Body Discovered!')" class="jojo-btn" style="padding:5px;">Emit Emergency Broadcast</button>
                <p id="radio-output" style="color: pink; margin-top:10px;"></p>`;
            break;

        case "KiraProxy":
            const databaseEntity = { secretCollectionLocation: "Hidden inside a direct paper bag under my desk." };
            window.securedProxy = ExtrasLabModules.createAuthProxy(databaseEntity, "MonaLisa1999");
            sandbox.innerHTML = `
                <h4>Lab 6: Vault Security Authentication Proxy</h4>
                <input type="text" id="proxy-token-input" placeholder="Enter security passphrase..." style="padding:5px;">
                <button onclick="document.getElementById('proxy-out').innerText = window.securedProxy.secretCollectionLocation" class="jojo-btn" style="padding:5px; min-width:120px;">Read Protected Memory</button>
                <p id="proxy-out" style="color: red; margin-top:10px; font-weight:bold;"></p>`;
            break;

        case "RohanLogger":
            const compileManuscriptPage = (pageNumber) => `Page ${pageNumber} successfully finalized.`;
            window.loggedCompile = ExtrasLabModules.createLoggingDecorator(compileManuscriptPage, "DEBUG");
            sandbox.innerHTML = `
                <h4>Lab 7: Telemetry Configurable Logging Decorator</h4>
                <button onclick="window.loggedCompile(Math.floor(Math.random() * 100))" class="jojo-btn" style="padding:5px;">Compile Page Frame</button>
                <div id="logger-output-box" style="text-align:left; font-family:monospace; background:#222; padding:10px; color:#0f0; margin-top:10px; max-height:100px; overflow-y:auto;"></div>`;
            break;

        default:
            sandbox.innerHTML = `<p style="color: red; font-weight: bold;">INVALID CODE DEBUSH. System Alert Raised.</p>`;
    }
}