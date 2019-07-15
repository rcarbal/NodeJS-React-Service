/**
 * Funtion used to search for services sent by the client-side application.
 */
const { ServicesString, enforcedProps } = require('../utilities/propRefs');


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

checkProp = (data ={}, property1, property2) => {
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
                let copies = null;

                if (payment) {
                    if (obj) {
                        copies = getNumberOfCopies(obj)
                    }

                } else {
                    if (obj) {
                        copies = getNumberOfCopies(obj, true)
                    }

                }


                // If there is a payment object, for Confirmation email
                if (payment) {
                    if (refString === 'package') {
                        const package = services["package"]['name'];
                        refString = `Package: ${services['package']['name']}`;
                    }

                    if (refString === "Delivery Option - ") {
                        if (services.deliveryOption) {
                            html += `<tr>
                                    <td>${refString} ${services.deliveryOption.value}</td>
                                    <td class="alignright">$${services.deliveryOption.price}</td>
                                </tr>
                        `;
                            continue;
                        }
                    }

                    if (copies) {
                        html += `
                        <tr>
                            <td>${refString} ${copies.first}</td>
                            <td class="alignright">$${copies.second}</td>
                        </tr>
                        `;
                    }

                }

                // For Order email
                else {

                    if (refString === 'package') {
                        refString = `Package: ${services['package']['name']}`;
                    }
                    if (refString === "Delivery Option - ") {
                        if (services.deliveryOption) {
                            html += `<li>
                                    ${refString} ${services.deliveryOption.value}
                                </li>
                        `;
                            continue;
                        }

                    }
                    if (copies) {
                        html += `
                        <li>
                            ${refString} ${returnCopies(copies)}
                        </li>
                    `
                    } else {
                        html += `
                        <li>
                            ${refString} ${"-- NOT REQUESTED"}
                        </li>
                    `
                    }
                }


            }
        }
    }
    if (payment) {
        return html + `
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>${payment}</strong></td>

            </tr>
    `;
    } else {
        return html;

    }

}

getRefString = (ref) => {
    return ServicesString[ref];

};

getNumberOfCopies = (paymentObject, order) => {
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
        if (order) {
            return {
                first: ` Copies: ${copies}`,
                second: parseInt(copies) * parseInt(onePrice)
            }
        } else {
            return {
                first: ` Copies: ${copies} @ $${onePrice}`,
                second: parseInt(copies) * parseInt(onePrice)
            }
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

function returnCopies(copies) {
    if (copies) {
        if (copies.first) {
            return copies.first;
        } else {
            return "";
        }
    } else {
        return "";
    }

};

function enforceProperties(properties) {
    let missingProps = {};
    for (prop in enforcedProps) {
        if (!properties.hasOwnProperty(enforcedProps[prop])) {
            missingProps[enforcedProps[prop]] = 'Required property not found in JSON request.';
        }
        else {
            let propValue = properties[enforcedProps[prop]];
            let extractedProp = enforcedProps[prop];

            switch (extractedProp) {
                case 'llcPackage':
                    if (!propValue.hasOwnProperty("price")){
                        missingProps.package_price = `${extractedProp} must have "price" property.`
                    }
                    if (!propValue.hasOwnProperty("value")){
                        missingProps.package_value = `${extractedProp} must have "value" property.`
                    }
                    break;
                case 'servicesList':
                    if (propValue.length < 1){
                        missingProps[extractedProp] = `${extractedProp} is missing required STO and EIN properties`
                    }
                    if (propValue.length > 0){
                        let sto = false;
                        let ein = false;
                        for (i in propValue){

                            if (!propValue[i].hasOwnProperty("price")){
                                missingProps[`serviceList_${i}_price`] = `${extractedProp} at at index ${i} is missing required "price"`;
                            }
                            if (!propValue[i].hasOwnProperty("value")){
                                missingProps[`serviceList_${i}_value`] = `${extractedProp} at at index ${i} is missing required "value"`;
                            }else{
                                if (propValue[i]['value'] === "Statement of Organizer"){
                                    sto = true;
                                }
                                if (propValue[i]['value'] === "Tax ID Number - EIN Application"){
                                    ein = true;
                                }
                            }
                        }

                        if (!sto) missingProps[extractedProp]['sto'] = `required Statement of Organizer not found.`
                        if (!ein) missingProps[extractedProp]['ein'] = `required Tax ID Number - EIN Application not found.`
                    }
                    break;

                case 'paymentTotal':
                    if (typeof propValue !== "number"){
                        missingProps.paymentTotal = 'Total Payment must be of type Number.'
                        break;
                    }
                    if (propValue < 1 ){
                        missingProps.paymentTotal = 'Total Payment must be greater then 0'
                        break;
                    }
                    break;

                default:
                    if (typeof propValue !== "string"){
                        missingProps[extractedProp] = `${extractedProp} ,must be of type String`;
                        break
                    }
                    if (propValue.length < 1){
                        missingProps[extractedProp] = `${extractedProp} ,must be of of greater length than ${propValue.length}`
                        break;
                    }
            }
        }
    }

    console.log('*Props Object*');
    console.log(missingProps);
    return missingProps;
}

function checkIfObjectIsEmpty(obj){
        for(var prop in obj) {
          if(obj.hasOwnProperty(prop)) {
            return false;
          }
        }
      
        return JSON.stringify(obj) === JSON.stringify({});
}


module.exports = {
    extractPopularServices,
    checkProp,
    converServicesToHTML,
    getDate,
    getPayment,
    formatMoney,
    enforceProperties,
    checkIfObjectIsEmpty
}