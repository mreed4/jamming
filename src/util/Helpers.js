const Helpers = {
  toProperCase(str) {
    let lower = str.toLowerCase().trim();
    return lower[0].toUpperCase() + lower.slice(1);
  },
};

export default Helpers;
