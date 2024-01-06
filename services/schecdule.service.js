const schecduleModel = require("../model/schecdule.model");

class schecduleService {
  getAllSchecdule = async (id) => {
    if (id) {
      return await schecduleModel.findById({ _id: id });
    } else {
      return await schecduleModel.find({});
    }
  };

  findByTitle = async (title) => {
    return await schecduleModel.find({ title: title });
  };

  deleteSchecdule = async (id) => {
    return await schecduleModel.findOneAndDelete({ _id: id });
  };

  editSchecdule = async (id, body) => {
    const { title, description, subject } = body;
    return await schecduleModel.findOneAndUpdate(
      { _id: id },
      { title: title, description: description, subject: subject }
    );
  };

  postSchecdule = async (schecduleDeatils) => {
    const schecdule = await schecduleModel.create(schecduleDeatils);
    schecdule.save();
  };
}

module.exports = schecduleService;
