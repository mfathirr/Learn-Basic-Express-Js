const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      message: 'GET  all users success',
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
      ServerMessage: err,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.email || !body.address) {
    return res.status(400).json({
      message: 'Anda mengirimkan data yang salah',
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res
      .json({
        message: 'Create new user succes',
        data: body,
      })
      .status(201);
  } catch (err) {
    res
      .json({
        message: 'Server Error',
        ServerMessage: err,
      })
      .status(500);
  }
};

const updateUser = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    await UsersModel.updateUser(body, id);
    res
      .json({
        message: 'UPDATE user success',
        data: {
          id: id,
          ...body,
        },
      })
      .status(201);
  } catch (error) {
    res
      .json({
        message: 'Server Error',
        ServerMessage: error,
      })
      .status(500);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res
      .json({
        message: 'DELETE user success',
        data: null,
      })
      .status(200);
  } catch (error) {
    res.json({
      message: 'Server Error',
      ServerMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
