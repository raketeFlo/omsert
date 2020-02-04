exports.createEmail = (name, population, region, capital, currencies, timeZones) => {
  return `${name} has ${population} inhabitants${region ? ` and belongs to continent ${region}.` : '.'}${capital ? ` Their capital is ${capital}` : ' They do not have capital'}. You can pay with ${currencies.join(', ')} and their timezone${timeZones.length > 1 ? 's are' : ' is'} ${timeZones.join(', ')}. If you want to find out more about other countries in the world, please follow this link: `;
};
