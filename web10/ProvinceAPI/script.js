// API lấy danh sách các tỉnh (province)
// GET : https://provinces.open-api.vn/api/p/

// Lấy danh sách quận huyện (district)
// GET : https://provinces.open-api.vn/api/p/${provinceCode}?depth=2

// Lấy danh sách xã phường
// GET : https://provinces.open-api.vn/api/d/${districtCode}?depth=2

const provinceEl = document.querySelector("#province");
const districtEl = document.querySelector("#district");
const communeEl = document.querySelector("#commune");

// Lấy danh sách tỉnh thành phố
const getProvince = async (provinceCode) => {
    try {
        let res = await axios.get(`https://provinces.open-api.vn/api/p/`);
        console.log(res);
        //console.log(res.data.districts);
        renderProvince(res.data)
    } catch (error) {
        console.log(error);
    }
}

// Lấy danh sách quận huyện
const getDistrict = async (districtCode) => {
    try {
        
        let res = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
        console.log(res.data);
        renderDistrict(res.data);

    } catch (error) {
        
    }
}

const renderDistrict = arr => {
    districtEl.innerHTML = "";
    let html = `<option hidden>-- Chọn quận/huyện</option>`;
    arr.forEach(d => {
        html += `<option value=${d.code}>${d.name}</option>`
    })
    districtEl.innerHTML = html
}


const renderProvince = arr => {
    provinceEl.innerHTML = "";

    let html = `<option hidden>-- Chọn tỉnh thành phố</option>`;
    arr.forEach(p => {
        html += `<option value=${p.code}>${p.name}</option>`
    });
    provinceEl.innerHTML = html;
}

provinceEl.addEventListener("change", {
    let provinceCode = 
})

getProvince()
