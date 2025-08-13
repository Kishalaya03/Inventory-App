const setLastVisit = (req, res, next) => {
  //1.if cookie is set,then add a local variable with last visit time data.
  if (req.cookies.lastVisit) {
    res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
  }
  res.cookie("lastVisit", new Date().toISOString(), {
    //to calculate the number of milliseconds in two days cookie will expire.
    //we use the maxAge attribute in cookies is used to specify the lifetime of a cookie in seconds.
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
  next();
};
export { setLastVisit };
