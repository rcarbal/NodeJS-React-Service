const { converServicesToHTML, extractLegalParties} = require('../../utilities/propUtils');
const { servicesRef } = require('../../utilities/propRefs')

module.exports = (data, callback) => {
  const servicesHTML = converServicesToHTML(data, servicesRef);
  // const parties = extractLegalParties(data);
  
  return `
<html>

<body>
  <h1>${data.name} Application</h1>
  <h2>Order Date: 01/12/2019</h2>

</body>
<br>

<h2>Contact Information</h2>
<div><strong>First Name: </strong>${data.contact.firstName}</div>
<div><strong>Last Name: </strong>${data.contact.lastName}</div>
<br>
<div><strong>Email: </strong>${data.contact.email}</div>
<div><strong>Phone Number: </strong>${data.contact.phoneNumber}</div>
<br>
<div><strong>Address: </strong>${data.contact.streetAdress}</div>
<div><strong>Address 2: </strong>${data.contact.streetAdressTwo}</div>
<div><strong>City: </strong>${data.contact.city}</div>
<div><strong>State: </strong>${data.contact.state}</div>
<div><strong>Zip Code: </strong>${data.contact.zip}</div>
<div><strong>Country: </strong>${data.contact.country}</div>

<br>
<h2>${data.type} Information</h2>
<div><strong>Name: </strong>${data.name}</div>
<div><strong>Alternative Name: </strong>${data.alternate_name}</div>
<div><strong>LLC State: </strong>${data.state}</div>

<br>
<h2>${data.type} Members</h2>
<div><strong>Primary: </strong>Ricardo Carballo</div>
<div><strong>Additional: </strong>Lianny Sabillon</div>

<br>
<h2>${data.type} Service Items:</h2>
<div>
  <ul>
    ${servicesHTML}
  </ul>
</div>

<br>
<h2>Special Request</h2>
<div>${data.request.request}</div>


</html>
`
}