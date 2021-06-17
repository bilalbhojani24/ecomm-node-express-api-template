exports.getPageNotFound = (req, res, next) => {
  res
    .status(404)
    .render("page-not-found", { pageTitle: "Page not found", path: "" });
};