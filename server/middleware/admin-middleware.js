const adminMiddleware = async (req, res, next) => {

  try {
    const isAdmin = req.user.isAdmin

    if (!isAdmin) {
      return res.status(403).json({ message: "Access Denied" })
    }
    next()

  } catch (error) {
    next(error)
  }

}

module.exports = adminMiddleware