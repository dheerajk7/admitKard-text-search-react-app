// generating form body on the basis of different value
export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //user-name = user%20name
    let encodedValue = encodeURIComponent(params[property]); //dheeraj 123 = dheeraj%20123
    formBody.push(encodedKey + "=" + encodedValue);
  }
  console.log(formBody.join("&"));
  return formBody.join("&");
}
