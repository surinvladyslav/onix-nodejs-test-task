import fetch from "node-fetch";

const getPriceUsd = async (req, res, next) => {
  let { currency } = req.query;

  if (!currency) {
    return res.status(404).send({message: 'Bad request'});
  }

  try {
    const response = await fetch(`https://api.coincap.io/v2/assets/${currency}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return res.json({
      usd: data.data.priceUsd
    });
  } catch (error) {
    return res.status(404).send({
      message: error.message
    });
  }
};

export default {
  getPriceUsd
}