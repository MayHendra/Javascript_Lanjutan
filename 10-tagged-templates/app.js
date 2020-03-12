// Tagged Templates

const nama = 'John';
const age = 32;

function highlight(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    return strings.reduce((result, str, i) => `${result}${str}<span>${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, Nama saya ${nama}, umur saya ${age} tahun.`;
document.body.innerHTML = str;