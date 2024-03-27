const axios = require("axios");

const getDataFromApi = async (req, res) => {
  const { Category } = req.query;
  console.log("cat", Category);

  try {
    if (Category) {
      let resdata = await axios.get(
        `https://api.publicapis.org/entries?Category=${Category}`
      );
      let responseData = resdata.data;
      res.status(200).json({ data: responseData });
    } else {
      let resdata = await axios.get(`https://api.publicapis.org/entries`);
      let responseData = resdata.data;
      res.status(200).json({ data: responseData });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getDataFromApi };
