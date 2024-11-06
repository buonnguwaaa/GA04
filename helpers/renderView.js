module.exports = (viewName, req, res, data = {}) => {
  let user;
  if (req.session && req.session.user) {
    user = req.session.user;
  } else {
    user = {};
  }
  res.render(viewName, { user: user, ...data });
};
