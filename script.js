const alleys = [
    {
        name: 'Northgate Bowl', city: 'Salem', dist: 5,
        rates: [
            { name: 'Mon - Thu (9:00am - 10:00pm)', days: [1, 2, 3, 4], times: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 29, shoe: 0 },
            { name: 'Mon - Thu (9:00am - 10:00pm)', days: [1, 2, 3, 4], times: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 52, shoe: 0, blockHr: 2, note: '2-Hour Special' },
            { name: 'Fri - Sun (9:00am - 10:00pm)', days: [0, 5, 6], times: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 48.5, shoe: 0 },
            { name: 'Fri - Sun (9:00am - 10:00pm)', days: [0, 5, 6], times: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 66, shoe: 0, blockHr: 2, note: '2-Hour Special' }
        ]
    },
    {
        name: 'The R.E.C.', city: 'Keizer', dist: 5,
        rates: [
            { name: 'Everyday (12:00pm - 5:00pm)', days: [0, 1, 2, 3, 4, 5, 6], times: [12, 13, 14, 15, 16], priceHr: 25, shoe: 4 },
            { name: 'Sun - Thu (5:00pm - 9:00pm)', days: [0, 1, 2, 3, 4], times: [17, 18, 19, 20], priceHr: 30, shoe: 4 },
            { name: 'Fri - Sat (5:00pm - 11:00pm)', days: [5, 6], times: [17, 18, 19, 20, 21, 22], priceHr: 35, shoe: 4, isCosmic: true, note: 'GlowBowl' }
        ]
    },
    {
        name: 'Silver Creek Lanes', city: 'Silverton', dist: 10,
        rates: [
            { name: 'Sun (12:00pm - 7:00pm)', days: [0], times: [12, 13, 14, 15, 16, 17, 18], priceHr: 35, shoe: 4.5 },
            { name: 'Mon (4:00pm - 9:00pm)', days: [1], times: [16, 17, 18, 19, 20], priceHr: 35, shoe: 4.5 },
            { name: 'Tue - Thu (11:00am - 9:00pm)', days: [2, 3, 4], times: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], priceHr: 30, shoe: 4.5 },
            { name: 'Fri (11:00am - 10:00pm)', days: [5], times: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 30, shoe: 4.5 },
            { name: 'Sat (11:00am - 10:00pm)', days: [6], times: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 35, shoe: 4.5 },
            { name: 'Fri (5:00pm - 10:00pm)', days: [5], times: [17, 18, 19, 20, 21], priceHr: 40, shoe: 4.5, isCosmic: true, note: 'Cosmic Bowling' },
            { name: 'Tue - Fri (11:00am - 5:00pm)', days: [2, 3, 4, 5], times: [11, 12, 13, 14, 15, 16], priceHr: 70, shoe: 0, blockHr: 2, note: 'Weekday 2-Hour Special' },
            { name: 'Mon - Thu (5:00pm - 9:00pm)', days: [1, 2, 3, 4], times: [17, 18, 19, 20], priceHr: 80, shoe: 0, blockHr: 2, note: 'Night 2-Hour Special' },
            { name: 'Sat (11:00am - 5:00pm)', days: [6], times: [11, 12, 13, 14, 15, 16], priceHr: 80, shoe: 0, blockHr: 2, note: 'Weekend 2-Hour Special' },
            { name: 'Sun (12:00pm - 7:00pm)', days: [0], times: [12, 13, 14, 15, 16, 17, 18], priceHr: 80, shoe: 0, blockHr: 2, note: 'Weekend 2-Hour Special' },
            { name: 'Fri (5:00pm - 10:00pm)', days: [5], times: [17, 18, 19, 20, 21], priceHr: 95, shoe: 0, blockHr: 2, isCosmic: true, note: 'Cosmic 2-Hour Special' }
        ]
    },
    {
        name: 'Lakeshore Lanes', city: 'Albany', dist: 25,
        rates: [
            { name: 'Mon - Fri (10:00am - 4:15pm)', days: [1, 2, 3, 4, 5], times: [10, 11, 12, 13, 14, 15], priceHr: 24, shoe: 3.5 },
            { name: 'Mon - Thu (4:15pm - 9:00pm)', days: [1, 2, 3, 4], times: [16, 17, 18, 19, 20], priceHr: 28, shoe: 3.5 },
            { name: 'Fri (4:15pm - 10:00pm)', days: [5], times: [16, 17, 18, 19, 20, 21], priceHr: 38, shoe: 3.5 },
            { name: 'Sat - Sun (10:00am - 10:00pm)', days: [0, 6], times: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 38, shoe: 3.5 },
            { name: 'Fri - Sat (11:00pm - 1:30am)', days: [5, 6], times: [23, 24], priceHr: 80, shoe: 3.5, blockHr: 2.5, isCosmic: true, note: 'Cosmic 2.5-Hour Block' }
        ]
    },
    {
        name: 'OSU MU Lanes', city: 'Corvallis', dist: 35,
        rates: [
            { name: 'Mon (11:00am - 10:00pm)', days: [1], times: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 15, shoe: 1 },
            { name: 'Tue (10:00am - 10:00pm)', days: [2], times: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 15, shoe: 1 },
            { name: 'Wed (11:00am - 10:00pm)', days: [3], times: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 15, shoe: 1 },
            { name: 'Thu - Fri (10:00am - 12:00am)', days: [4, 5], times: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], priceHr: 15, shoe: 1 },
            { name: 'Sat (1:00pm - 12:00am)', days: [6], times: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], priceHr: 15, shoe: 1 },
            { name: 'Sun (6:00pm - 10:00pm)', days: [0], times: [18, 19, 20, 21], priceHr: 15, shoe: 1 }
        ]
    },
    {
        name: 'AMF Firebird Lanes', city: 'Salem', dist: 5,
        rates: [
            { name: 'Sun (12:00pm - 10:00pm)', days: [0], times: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21], priceHr: 65, shoe: 4, note: 'Starting Price' },
            { name: 'Mon - Tue (4:00pm - 11:00pm)', days: [1, 2], times: [16, 17, 18, 19, 20, 21, 22], priceHr: 65, shoe: 4, note: 'Starting Price' },
            { name: 'Wed (12:00pm - 11:00pm)', days: [3], times: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], priceHr: 65, shoe: 4, note: 'Starting Price' },
            { name: 'Thu (4:00pm - 11:00pm)', days: [4], times: [16, 17, 18, 19, 20, 21, 22], priceHr: 65, shoe: 4, note: 'Starting Price' },
            { name: 'Fri (4:00pm - 12:00am)', days: [5], times: [16, 17, 18, 19, 20, 21, 22, 23], priceHr: 65, shoe: 4, note: 'Starting Price' },
            { name: 'Sat (12:00pm - 12:00am)', days: [6], times: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], priceHr: 65, shoe: 4, note: 'Starting Price' }
        ]
    }
];

const state = {
    step: 0,
    sequence: ['priority'],
    answers: {
        priority: null,
        distance: 15,
        day: null,
        hoursArr: [], // Array of selected hours (e.g. 18, 19)
        duration: 2,  // Default to 2 hours
        cost: 150
    },
    isCosmic: false,
    sortBy: 'cost',
    sortDir: 'asc',
    selectedAlleyIndex: null,
    highlightRateIndex: null
};

const views = {
    priority: () => `
        <h2>What's the biggest priority?</h2>
        <p class="subtitle">Select what matters most, and we'll focus on that.</p>
        <div class="options-grid">
            <button class="option-btn" onclick="selectPriority('dist')">📍 Closest Location</button>
            <button class="option-btn" onclick="selectPriority('cost')">💸 Lowest Price</button>
            <button class="option-btn" onclick="selectPriority('any')" style="border-style: dashed; background: rgba(0,0,0,0.5);"> Don't Care </button>
        </div>
        <div style="text-align:center; margin-top:20px;">
            <button class="btn btn-skip" onclick="showAllLocations()" style="font-size:0.9rem; padding: 5px 15px;">Show all locations</button>
        </div>
    `,
    distanceView: () => `
        <h2>Max Drive Distance?</h2>
        <p class="subtitle">How far are you willing to go?</p>
        <div class="slider-container">
            <div class="slider-value" id="dist-v">${state.answers.distance} mi</div>
            <input type="range" min="0" max="40" step="1" value="${state.answers.distance}" oninput="document.getElementById('dist-v').innerText = this.value + ' mi'; state.answers.distance = parseInt(this.value)">
        </div>
        <div class="nav-buttons">
            <button class="btn btn-skip" onclick="prevStep()">← Back</button>
            <button class="btn btn-primary" onclick="nextStep()">Continue ➔</button>
        </div>
        <div style="text-align:center; margin-top:20px;">
            <button class="btn btn-skip" onclick="location.reload()" style="font-size:0.9rem; padding: 5px 15px;">Start Over</button>
        </div>
    `,
    timeView: () => `
        <h2>When are you playing?</h2>
        <p class="subtitle">Select a day, then tap requested start times.</p>
        <div class="days-grid">
            ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => {
        let disabled = isDayValid(i) ? '' : 'disabled style="opacity:0.3; pointer-events:none;"';
        return `<button class="chip ${state.answers.day === i ? 'selected' : ''}" ${disabled} onclick="setDay(${i}, this)">${d}</button>`;
    }).join('')}
        </div>
        <div id="hour-grid-container" style="margin-top:10px;"></div>
        <div class="nav-buttons">
            <button class="btn btn-skip" onclick="prevStep()">← Back</button>
            <button class="btn btn-primary" onclick="nextStep()">Continue ➔</button>
        </div>
        <div style="text-align:center; margin-top:20px;">
            <button class="btn btn-skip" onclick="location.reload()" style="font-size:0.9rem; padding: 5px 15px;">Start Over</button>
        </div>
    `,
    durationView: () => `
        <h2>How many hours to bowl?</h2>
        <p class="subtitle">Whole numbers only.</p>
        <div class="slider-container">
            <div class="slider-value" id="dur-v">${state.answers.duration ? state.answers.duration + ' hrs' : 'Unsure'}</div>
            <input type="range" min="1" max="5" step="0.1" value="${state.answers.duration || 2}" oninput="let v = Math.round(this.value); document.getElementById('dur-v').innerText = v + ' hrs'; state.answers.duration = v">
        </div>
        <div class="nav-buttons" style="justify-content:center; gap:10px;">
            <button class="btn btn-skip" onclick="prevStep()">← Back</button>
            <button class="btn btn-skip" style="border: 1px dashed var(--neon-blue);" onclick="state.answers.duration = null; nextStep()">Unsure</button>
            <button class="btn btn-primary" onclick="nextStep()">Continue ➔</button>
        </div>
        <div style="text-align:center; margin-top:20px;">
            <button class="btn btn-skip" onclick="location.reload()" style="font-size:0.9rem; padding: 5px 15px;">Start Over</button>
        </div>
    `,
    costView: () => `
        <h2>Max budget?</h2>
        <p class="subtitle">Maximum total cost for 1 Lane + 4 Shoes</p>
        <div class="slider-container">
            <div class="slider-value" id="cost-v">$${state.answers.cost}</div>
            <input type="range" min="40" max="500" step="1" value="${state.answers.cost}" oninput="document.getElementById('cost-v').innerText = '$' + this.value; state.answers.cost = parseInt(this.value)">
        </div>
        <div class="nav-buttons">
            <button class="btn btn-skip" onclick="prevStep()">← Back</button>
            <button class="btn btn-primary" onclick="nextStep()">Continue ➔</button>
        </div>
        <div style="text-align:center; margin-top:20px;">
            <button class="btn btn-skip" onclick="location.reload()" style="font-size:0.9rem; padding: 5px 15px;">Start Over</button>
        </div>
    `,
    results: () => renderResults(),
    locationDetail: () => renderLocationDetail(),
    allLocations: () => renderAllLocations()
};

function isDayValid(day) {
    if (!state.isCosmic) return true;
    let valid = false;
    alleys.forEach(a => {
        if ((state.answers.priority === 'dist' || state.answers.priority === 'custom') && a.dist > state.answers.distance) return;
        a.rates.forEach(r => {
            if (r.isCosmic && r.days.includes(day)) valid = true;
        });
    });
    return valid;
}

function isHourValid(day, hr) {
    if (!state.isCosmic) return true;
    let valid = false;
    alleys.forEach(a => {
        if ((state.answers.priority === 'dist' || state.answers.priority === 'custom') && a.dist > state.answers.distance) return;
        a.rates.forEach(r => {
            if (r.isCosmic && r.days.includes(day)) {
                if (!r.times || r.times.includes(hr)) valid = true;
            }
        });
    });
    return valid;
}

function toggleCosmic() {
    state.isCosmic = document.getElementById('cosmic-toggle').checked;
    if (state.isCosmic) {
        document.body.classList.add('cosmic-theme');
    } else {
        document.body.classList.remove('cosmic-theme');
    }

    // Clear selections if they are no longer valid 
    if (state.isCosmic && state.answers.day !== null) {
        if (!isDayValid(state.answers.day)) {
            state.answers.day = null;
            state.answers.hoursArr = [];
        } else {
            state.answers.hoursArr = state.answers.hoursArr.filter(h => isHourValid(state.answers.day, h));
        }
    }

    if (state.step > 0 && state.sequence[state.step] === 'results') {
        render();
    } else if (state.step > 0 && state.sequence[state.step] === 'timeView') {
        render(); // Rerender to dynamically disable choices
    }
}

function changeSort(selectObj) {
    state.sortBy = selectObj.value;
    render();
}

function toggleSortDir() {
    state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
    render();
}

function showLocationDetail(alleyIndex, rateIndex) {
    state.selectedAlleyIndex = alleyIndex;
    state.highlightRateIndex = rateIndex;
    state.sequence.push('locationDetail');
    state.step = state.sequence.length - 1;
    render();
}

function showAllLocations() {
    state.sequence.push('allLocations');
    state.step = state.sequence.length - 1;
    render();
}

function backToResults() {
    state.sequence.pop();
    state.step = state.sequence.length - 1;
    render();
}

function selectPriority(p) {
    state.answers.priority = p;
    let sequence = ['priority', 'timeView', 'durationView']; // Always ask time and duration
    if (p === 'dist') sequence.push('distanceView');
    else if (p === 'cost') sequence.push('costView');

    sequence.push('results');
    state.sequence = sequence;
    nextStep();
}

function setDay(d, btn) {
    state.answers.day = d;
    document.querySelectorAll('.days-grid .chip').forEach(c => c.classList.remove('selected'));
    btn.classList.add('selected');
    renderHours();
}

function toggleHour(hr) {
    if (state.answers.hoursArr.includes(hr)) {
        state.answers.hoursArr = state.answers.hoursArr.filter(h => h !== hr);
    } else {
        state.answers.hoursArr.push(hr);
    }
    renderHours();
}

function renderHours() {
    let container = document.getElementById('hour-grid-container');
    if (!container) return;

    let html = '<div class="time-grid">';
    let labels = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
    let values = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    let validValues = values.filter(v => isHourValid(state.answers.day, v));

    for (let i = 0; i < values.length; i++) {
        let disabled = isHourValid(state.answers.day, values[i]) ? '' : 'disabled style="opacity:0.3; pointer-events:none;"';
        let sel = state.answers.hoursArr.includes(values[i]) ? 'selected' : '';
        html += `<button class="chip ${sel}" ${disabled} onclick="toggleHour(${values[i]})">${labels[i]}</button>`;
    }
    html += `</div>`;

    // Add "Any Time" button
    let allSelected = validValues.length > 0 && validValues.every(v => state.answers.hoursArr.includes(v));
    let selAll = allSelected ? 'selected' : '';
    html += `<div style="text-align:center; margin-top:15px;">
        <button class="chip ${selAll}" onclick="selectAllHours()">Select All (Any Time)</button>
    </div>`;

    container.innerHTML = html;
}

function selectAllHours() {
    let values = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    let validValues = values.filter(v => isHourValid(state.answers.day, v));
    let allSelected = validValues.length > 0 && validValues.every(v => state.answers.hoursArr.includes(v));

    if (allSelected) {
        state.answers.hoursArr = [];
    } else {
        state.answers.hoursArr = [...validValues];
    }
    renderHours();
}

function calcTotalCost(rate) {
    let dur = state.answers.duration || 2;
    if (rate.blockHr > 0) {
        return rate.priceHr + (rate.shoe * 4);
    }
    return (rate.priceHr * dur) + (rate.shoe * 4);
}

function nextStep() {
    state.step++;
    render();
}

function prevStep() {
    if (state.step > 0) {
        state.step--;
        render();
    }
}

function renderResults() {
    let finalOptions = [];

    alleys.forEach((alley, aIdx) => {
        // Distance Filter
        if (state.answers.priority === 'dist' || state.answers.priority === 'custom') {
            if (alley.dist > state.answers.distance) return;
        }

        alley.rates.forEach((rate, rIdx) => {
            // Cosmic Filter STRICT
            if (state.isCosmic && !rate.isCosmic) return;

            // Day Filter
            if (state.answers.day !== null && !rate.days.includes(state.answers.day)) return;

            // Hour Filter (Intersect)
            if (state.answers.hoursArr.length > 0) {
                if (rate.times) {
                    let match = rate.times.some(t => state.answers.hoursArr.includes(t));
                    if (!match) return;
                }
            }

            // Calculate cost for this specific rate given target duration
            let cost = calcTotalCost(rate);

            // Max Cost Filter
            if ((state.answers.priority === 'cost' || state.answers.priority === 'custom')) {
                if (cost > state.answers.cost) return;
            }

            // Valid Match: Push it to final options as a standalone result
            finalOptions.push({
                ...alley,
                alleyIndex: aIdx,
                rateIndex: rIdx,
                bestRateName: rate.name,
                note: rate.note || '',
                totalCost: cost,
                isCosmic: rate.isCosmic || false
            });
        });
    });

    // Sort by selected criteria
    finalOptions.sort((a, b) => {
        let valA = state.sortBy === 'cost' ? a.totalCost : a.dist;
        let valB = state.sortBy === 'cost' ? b.totalCost : b.dist;

        if (state.sortDir === 'asc') return valA - valB;
        else return valB - valA;
    });

    if (finalOptions.length === 0) {
        return `
            <h2>No Matches Found</h2>
            <p class="subtitle">Try adjusting your filters or turning off Cosmic Only.</p>
            <div class="nav-buttons"><button class="btn btn-primary" onclick="location.reload()">Start Over</button></div>
         `;
    }

    let topCount = 3; // Show 3 items before "Show more"
    let dirIcon = state.sortDir === 'asc' ? '▲' : '▼';
    let html = `<h2>Best Matches</h2>
        <div class="sort-header">
            <p class="subtitle" style="margin-bottom:0; text-align:left;">Found ${finalOptions.length} matching</p>
            <div style="display:flex; gap:10px; align-items:center;">
                <select class="sort-select" onchange="changeSort(this)">
                    <option value="cost" ${state.sortBy === 'cost' ? 'selected' : ''}>Price</option>
                    <option value="dist" ${state.sortBy === 'dist' ? 'selected' : ''}>Distance</option>
                </select>
                <button class="sort-dir-btn" onclick="toggleSortDir()">${dirIcon}</button>
            </div>
        </div>
        <div class="results-list">`;

    finalOptions.slice(0, topCount).forEach(opt => html += buildResultCard(opt));
    html += `</div>`;

    if (finalOptions.length > topCount) {
        let diff = finalOptions.length - topCount;
        html += `
            <div class="show-more-btn" id="show-more-btn">
                <button onclick="document.getElementById('more-results').style.display = 'flex'; this.parentElement.style.display = 'none';">
                    Show ${diff} Other Options
                </button>
            </div>
            <div class="results-list" id="more-results" style="display:none; margin-top:15px;">
        `;
        finalOptions.slice(topCount).forEach(opt => html += buildResultCard(opt));
        html += `</div>`;
    }

    html += `
        <div class="nav-buttons" style="margin-top:20px;">
            <button class="btn btn-skip" onclick="location.reload()">Start Over</button>
        </div>
    `;

    return html;
}

function renderLocationDetail() {
    let alley = alleys[state.selectedAlleyIndex];
    let hlIdx = state.highlightRateIndex;
    let html = `
        <div class="detail-header">
            <button class="back-btn" onclick="backToResults()">← Back</button>
            <h2 style="margin:0;">${alley.name}</h2>
        </div>
        <p class="subtitle" style="text-align:left; margin-top:5px;">📍 ${alley.city} (~${alley.dist}mi)</p>
        <div class="options-list-container" style="margin-top:20px; text-align:left;">
    `;

    let standardHtml = '<h3 style="margin-top:10px; margin-bottom:10px; font-size:1.2rem;">Standard Rates</h3><div class="detail-rates-list">';
    let specialHtml = '<h3 style="margin-top:20px; margin-bottom:10px; font-size:1.2rem;">Specials</h3><div class="detail-rates-list">';
    let hasSpecial = false;
    let hasStandard = false;

    let sortedRates = alley.rates.map((rate, index) => ({ rate, originalIndex: index })).sort((a, b) => {
        let dayA = Math.min(...a.rate.days);
        let dayB = Math.min(...b.rate.days);
        if (dayA !== dayB) return dayA - dayB;

        let timeA = a.rate.times ? Math.min(...a.rate.times) : 0;
        let timeB = b.rate.times ? Math.min(...b.rate.times) : 0;
        return timeA - timeB;
    });

    sortedRates.forEach((item) => {
        let rate = item.rate;
        let i = item.originalIndex;
        let isSpecial = rate.blockHr > 0;
        let badge = rate.isCosmic ? '<span class="cosmic-badge">COSMIC 🎳</span>' : '';
        let hlClass = (i === hlIdx) ? 'highlighted-rate' : '';
        let noteStr = rate.note ? `<span style="color:var(--neon-purple); display:block; font-size: 0.85rem; font-weight:bold; margin-top:4px;">${rate.note}</span>` : '';

        let priceDisplay = rate.blockHr > 0 ? `$${rate.priceHr.toFixed(2)}` : `$${rate.priceHr.toFixed(2)}/hr`;
        let durationStr = rate.blockHr ? `for ${rate.blockHr} hrs` : ``;
        let shoeDisplay = rate.shoe === 0 ? `Shoes included` : `Shoe rental: $${rate.shoe.toFixed(2)}/ea`;

        let rowHtml = `
            <div class="rate-row ${hlClass}">
                <div class="rate-row-info">
                    <div style="font-weight:600; font-size:1.1rem; color:var(--text-main);">${rate.name} ${badge}</div>
                    ${noteStr}
                    <div style="font-size:0.85rem; color:rgba(255,255,255,0.6); margin-top:6px;">👞 ${shoeDisplay}</div>
                </div>
                <div class="rate-row-price" style="text-align:right;">
                    <div style="font-size:1.3rem; font-weight:800; color:var(--text-main);">${priceDisplay}</div>
                    ${durationStr ? `<div style="font-size:0.85rem; color:var(--text-muted); padding-top:2px;">${durationStr}</div>` : ''}
                </div>
            </div>
        `;

        if (isSpecial) {
            specialHtml += rowHtml;
            hasSpecial = true;
        } else {
            standardHtml += rowHtml;
            hasStandard = true;
        }
    });

    standardHtml += '</div>';
    specialHtml += '</div>';

    if (hasStandard) html += standardHtml;
    if (hasSpecial) html += specialHtml;

    html += `</div>`;
    return html;
}

function buildResultCard(opt) {
    let hrs = state.answers.duration || 2;
    let badge = opt.isCosmic ? '<span class="cosmic-badge">COSMIC 🎳</span>' : '';
    return `
        <div class="result-card clickable" onclick="showLocationDetail(${opt.alleyIndex}, ${opt.rateIndex})">
            <div class="result-info">
                <h3>${opt.name} ${badge}</h3>
                <p>📍 ${opt.city} (~${opt.dist}mi)</p>
                <p>🕒 ${opt.bestRateName}</p>
            </div>
            <div class="result-price">
                <div class="amount">$${opt.totalCost.toFixed(2)}</div>
                <div class="note">${opt.note ? opt.note : `For ${hrs} hr + shoes`}</div>
            </div>
        </div>
    `;
}

function renderAllLocations() {
    let html = `
        <div class="detail-header" style="margin-bottom:15px;">
            <button class="back-btn" onclick="backToResults()">← Back</button>
            <h2 style="margin:0;">All Locations</h2>
        </div>
        <div class="results-list">`;

    alleys.forEach((alley, aIdx) => {
        let minPriceHr = Infinity;
        let hasCosmic = false;

        alley.rates.forEach(r => {
            if (r.isCosmic) hasCosmic = true;
            if (!r.blockHr && r.priceHr < minPriceHr) {
                minPriceHr = r.priceHr;
            }
        });

        // Fallback to lowest price if only block rates exist
        if (minPriceHr === Infinity) {
            alley.rates.forEach(r => {
                if (r.priceHr < minPriceHr) minPriceHr = r.priceHr;
            });
        }

        let badge = hasCosmic ? '<span class="cosmic-badge" style="display:inline-block; margin-top:8px;">COSMIC ✨</span>' : '';

        html += `
            <div class="result-card clickable" onclick="showLocationDetail(${aIdx}, null)">
                <div class="result-info">
                    <h3>${alley.name}</h3>
                    <p style="margin-top:4px;">📍 ${alley.city} (~${alley.dist}mi)</p>
                    ${badge}
                </div>
                <div class="result-price" style="text-align:right;">
                    <div style="font-size:0.85rem; color:var(--text-muted);">Starting at</div>
                    <div class="amount" style="font-size:1.5rem;">$${minPriceHr !== Infinity ? minPriceHr.toFixed(2) : '--'}</div>
                    <div class="note">per hour</div>
                </div>
            </div>
        `;
    });

    html += `</div>
        <div class="nav-buttons" style="margin-top:20px;">
            <button class="btn btn-skip" onclick="location.reload()">Start Over</button>
        </div>
    `;

    return html;
}

function render() {
    const viewKey = state.sequence[state.step];
    const container = document.getElementById('wizard-content');
    const toggleContainer = document.querySelector('.toggle-container');

    if (toggleContainer) {
        toggleContainer.style.visibility = (state.step === 0 || viewKey === 'timeView') ? 'visible' : 'hidden';
    }

    // Progress bar
    const progress = document.getElementById('progress');
    const progressContainer = document.getElementById('progress-container');
    if (state.step > 0 && viewKey !== 'results' && viewKey !== 'locationDetail') {
        progressContainer.style.display = 'block';
        let percent = (state.step / (state.sequence.length - 2)) * 100;
        progress.style.width = percent + '%';
    } else {
        progressContainer.style.display = 'none';
    }

    container.style.opacity = 0;
    setTimeout(() => {
        container.innerHTML = views[viewKey]();
        if (viewKey === 'timeView' && state.answers.day !== null) {
            renderHours();
        }
        container.style.opacity = 1;
    }, 200);
}

window.onload = render;
