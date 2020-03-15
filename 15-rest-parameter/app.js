// Rest Parameter

function myFunc(...values) {
    return values;
}

const test = myFunc(1, 2, 3, 4, 6).reduce((pv, cv) => pv + cv);
document.body.innerHTML = test;

// array destructuring
const kelompok1 = ['jojon', 'rusdi', 'surahman', 'radit'];
const [ketua, wakil, ...anggota] = kelompok1;

// object destructuring
const team = {
    pm: 'Dhodi',
    frontend: 'rahmat',
    backend: 'surahman',
    ux: 'ferry',
    devOps: 'dudi'
}

const { pm, ...teams } = team;

// filtering
function filtering(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filtering('number', 1, 2, 3, 'hai', true, 'boomer', 4, false));