/**
 * @param {string} search
 * @param {[string]} data
 * @returns {[string]}
 */
const onSearch = (search, data) =>
  data.filter((item) =>
    Object.values(item).some((val) => {
      if (val) {
        return val
          .toString()
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      }
      return false;
    })
  );

export default onSearch;
