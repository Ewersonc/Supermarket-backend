import userModel from '../models/user-model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const controller = {

  deleteOne: async function (req, res) {
    try {
      await userModel.deleteOne({ cpf: req.params.id });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (err) {
      res.status(400).json({ message: "Erro ao deletar usuário" });
    }
  },

  getOne: async function (req, res) {
    try {
      const result = await userModel.findOne({ cpf: req.params.id });

      if (!result) return res.status(404).json({ message: "Usuário não encontrado" });

      const { __v, _id, ...json } = result.toObject();
      res.status(200).json(json);

    } catch (err) {
      res.status(400).json({ message: "Erro ao buscar usuário" });
    }
  },

  updateOne: async function (req, res) {
    try {
      await userModel.updateOne(
        { cpf: req.params.id },
        req.body,
        { upsert: false }
      );

      res.status(200).json({ message: "Usuário atualizado com sucesso!" });

    } catch (err) {
      res.status(400).json({ message: "Erro ao atualizar usuário" });
    }
  },

  getAll: async function (req, res) {
    try {
      const result = await userModel.find();
      res.status(200).json(result);

    } catch (err) {
      res.status(400).json({ message: "Erro ao buscar usuários" });
    }
  },

  create: async function (req, res) {
    try {
      const user = req.body;
      const passwordEncrypted = await bcrypt.hash(user.password, 10);
      user.password = passwordEncrypted;
      const result = await userModel.create(user);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ message: "Erro ao criar usuário" });
    }
  },

  login: async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      const match = await bcrypt.compare(req.body.password, user.password);

      if (!match) {
        return res.status(401).json({ message: "Senha incorreta" });
      }

      
      const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: "1h" });

      return res.status(200).json({
        message: "Login bem-sucedido",
        token
      });

    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Erro interno no login" });
    }
  },

  register: async (req, res) => {
    try {
      const { name, cpf, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await userModel.create({
        name,
        cpf,
        email,
        password: hashedPassword
      });

      res.status(201).json({ message: "Usuário cadastrado!", user });
    } catch (err) {
      res.status(400).json({ message: "Erro ao cadastrar", error: err });
    }
  },

  me: async (req, res) => {
    try {
      const user = await userModel.findById(req.userId).select("-password -__v");

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      res.status(200).json({ user });

    } catch (err) {
      res.status(500).json({ message: "Erro ao buscar usuário" });
    }
  }



};

export default controller;
