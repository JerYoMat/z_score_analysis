
async function getCompanies() {
  let response = await fetch('/api/list')
  let companies = await response.json();
  console.log(companies)
  return companies;
}



const Client = { getCompanies };
export default Client;