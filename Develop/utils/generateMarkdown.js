function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}



function renderLicenseLink(license) {
if (license !== 'None') {
return `License: [${license}](LICENSE.md)`;
  }
return '' ;
}

function renderLicenseSection(license) {
const licenseBadge = renderLicenseBadge(license);
const licenseLink = renderLicenseLink (license);
if (licenseBadge || licenseLink) {
  return `
  ## License
${licenseBadge}
${licenseLink}
`;
  }

  return '';
}

function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  

${data.description}

${data.installation}

${data.usage}

${data.contributors}

${data.license}

`;
}

module.exports = generateMarkdown;
