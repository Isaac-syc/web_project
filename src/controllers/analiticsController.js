let getAnalytics = (req, res) => {
  if (req.isAuthenticated()) {
    res.render("analytics");
  }
};

module.exports = {
  getAnalytics: getAnalytics,
};
