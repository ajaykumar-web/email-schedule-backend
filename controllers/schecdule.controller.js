const schecduleService = require("../services/schecdule.service");
const schecduleServiceInstance = new schecduleService();

const getAllSchecdule = async (req, res) => {
  const id = req.params.id;
  const title = req.query.title;
  if (title) {
    try {
      const response = await schecduleServiceInstance.findByTitle(title);
      if (response) {
        res.status(200).json({ message: "Shecdule exist..", data: response });
      } else {
        res.status(200).json({ message: "Schecdule not found.." });
      }
    } catch (e) {
      console.error(e);
    }
  } else if (id) {
    try {
      const response = await schecduleServiceInstance.getAllSchecdule(id);
      if (response) {
        res
          .status(200)
          .json({ message: "Data fetched successfully.", data: response });
      } else {
        res.status(200).json({ message: "Schecdule does not exist." });
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const response = await schecduleServiceInstance.getAllSchecdule();
      res
        .status(200)
        .json({ message: "Data fetched successfully.", data: response });
    } catch (e) {
      console.error(e);
    }
  }
};

const deleteSchecdule = async (req, res) => {
  try {
    const response = await schecduleServiceInstance.deleteSchecdule(
      req.params.id
    );
    if (response) {
      res
        .status(200)
        .json({ message: "Schecdule deleted successfully.", data: response });
    } else {
      res.status(200).json({ message: "Schecdule does not exist." });
    }
  } catch (e) {
    console.error(e);
  }
};

const editSchecdule = async (req, res) => {
  console.log("Controller Edit.");
  const id = req.params.id;
  const body = req.body;
  console.log(id, body);
  try {
    const response = await schecduleServiceInstance.editSchecdule(id, body);
    if (response) {
      res
        .status(200)
        .json({ message: "Schecdule edited successfully.", data: response });
    } else {
      res.status(200).json({ message: "Schecdule does not exist." });
    }
  } catch (e) {
    console.error(e);
  }
};

const postSchecdule = async (req, res) => {
  const schecduleDetails = req.body;
  try {
    await schecduleServiceInstance.postSchecdule(schecduleDetails);
    res.status(200).json({ message: "Schecdule added successfully." });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getAllSchecdule,
  postSchecdule,
  deleteSchecdule,
  editSchecdule,
};
