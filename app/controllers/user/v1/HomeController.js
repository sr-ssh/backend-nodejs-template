const Controller = require(`${config.path.controllers.user}/Controller`);
const TAG = "v1_Home";
module.exports = new (class HomeController extends Controller {
  async index(req, res) {
    return res.json({ success: true, message: "Home v1" });
  }

 
})();
