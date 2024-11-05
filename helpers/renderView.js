// module.exports = (viewName, req, res) => {
//     let user;
//     if (req.session || req.session.user) {
//         user = req.session.user;
//     }
//     else {
//         user = {};
//     }
//     res.render(`../views/${viewName}.pug`, { user: user });
// };

module.exports = (viewName, req, res, data = {}) => {
  let user;
  if (req.session && req.session.user) {
    user = req.session.user;
  } else {
    user = {};
  }
  res.render(viewName, { user: user, ...data });
};
