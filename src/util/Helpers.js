const Helpers = {
  toProperCase(str) {
    let lower = str.toLowerCase().trim();
    return lower[0].toUpperCase() + lower.slice(1);
  },

  parseTrackName(str) {
    if (!str.includes(" - ")) {
      return str;
    }

    let split = str.split(" - ");
    return split;
  },
};

export default Helpers;
