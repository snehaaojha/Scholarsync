// server/controllers/scholarshipController.js

const axios = require("axios");

exports.getScholarshipsFromHF = async (req, res) => {
  try {
    const response = await axios.get("https://datasets-server.huggingface.co/rows", {
      params: {
        dataset: "vyshnaviprasad/scholarship_dataset",
        config: "default",
        split: "train",
        offset: 0,
        length: 100,
      },
    });

    const data = response.data.rows.map((row) => row.row);
    res.json(data);
  } catch (err) {
    console.error("❌ HuggingFace API error:", err.message);
    res.status(500).json({ message: "Failed to fetch data" });
  }
};
