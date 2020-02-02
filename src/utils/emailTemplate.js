exports.createEmail = (name, population, region, capital,currencies, timeZones) => {
  return `${name} has ${population} habitants and belongs to the continent ${region}. Their capital is ${capital}. You can pay with ${currencies.join(', ')} and their timezone${timeZones.length > 1 ? 's are' : ' is'} ${timeZones.join(', ')}. If you want to find out more about other countries in the world, please follow this link: `;
};
