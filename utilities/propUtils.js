/**
 * Funtion used to search for services sent by the client-side application.
 */
const { ServicesString } = require('../utilities/propRefs');


extractPopularServices = (array, word) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i]["value"] === word) {
            return {
                price: array[i]["price"]
            };
        }
    }

    return {};
}

checkProp = (data, property1, property2) => {
    if (data.hasOwnProperty(property1) && data.hasOwnProperty(property2)) {
        return {
            price: data.price,
            value: data.value

        }

        return {};
    }
}

converServicesToHTML = ({ services }, refs, payment) => {
    let html = "";

    for (let ref in refs) {
        for (let prop in services) {
            if (refs[ref] === prop) {
                let refString = getRefString(refs[ref]);
                const obj = services[prop];
                const copies = getNumberOfCopies(obj)

                if (refString === 'package') {
                    const package = services["package"]['name'];
                    refString = `Package: ${services['package']['name']}`;
                }


                html += `
                <tr>
                    <td>${refString} ${copies.first}</td>
                    <td class="alignright">$${copies.second}</td>
                </tr>
                `;
            }
        }
    }
    return html + `
    <tr>
        <td><strong>Total</strong></td>
        <td><strong>${payment}</strong></td>

    </tr>
    `;
}

getRefString = (ref) => {
    return ServicesString[ref];

};

getNumberOfCopies = (paymentObject) => {
    let copies = "";
    let onePrice = "";

    const keys = Object.keys(paymentObject)

    for (key in keys) {
        if (keys[key] === "numCopies") {
            const copiesNum = paymentObject[keys[key]];
            copies = copiesNum;
        }

        else if (keys[key] === "price") {
            const price = paymentObject[keys[key]];
            onePrice = price;
        }
    }

    if (parseInt(copies) > 1) {
        return {
            first: ` Copies: ${copies} @ $${onePrice}`,
            second: parseInt(copies) * parseInt(onePrice)
        }
    }
    else if (parseInt(copies) === 1) {
        return {
            first: "",
            second: onePrice
        }

    } else {
        return {
            first: "",
            second: onePrice
        }
    }
}

getDate = () => {
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

getPayment = (payment) => {
    const dollars = payment / 100;
    const cents = payment % 100;

    return ``;

}

function formatMoney(number, decPlaces, decSep, thouSep) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return sign +
        (j ? i.substr(0, j) + thouSep : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
}


module.exports = {
    extractPopularServices,
    checkProp,
    converServicesToHTML,
    getDate,
    getPayment,
    formatMoney
}