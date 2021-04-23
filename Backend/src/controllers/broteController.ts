import { Request, Response } from "express";
import Brote from "../models/Brote";

class BroteController {

    public async getBrotes(req: Request, res: Response) {
        //Nos devuelve la lista de brotes
        try {
          let brotes = await Brote.find();
          res.status(200).json(brotes); //Si la lista está vacia tambien es valido
        } catch (error) {
          console.log(`\n` + error);
          res.status(500).json(`${error}`);
        }
      }

      public async getBrote(req: Request, res: Response) {
        //Nos devuelve un brote
        try {
          let brote = await Brote.findById(req.params.broteid);
          if (!brote) {
            console.log(`\nBrote con id ${req.params.broteid} no encontrado`);
            res
              .status(404)
              .json(`Brote con id ${req.params.broteid} no encontrado`);
          } else res.status(200).json(brote);
        } catch (error) {
          console.log(`\n` + error);
          res.status(500).json(`${error}`);
        }
      }

      public async addBrote(req: Request, res: Response) {
        try {
          let { name, description, initialdate, finaldate } = req.body;
          let newBrote = new Brote({ name, description, initialdate, finaldate });
          await newBrote.save();
          console.log(`\nBrote añadido:\n ${newBrote}`);
          res.status(201).json(newBrote);
        } catch (error) {
          console.log(`\n` + error);
          res.status(500).json(`${error}`);
        }
      }

      public async editBrote(req: Request, res: Response) {
        try {
          let paramsBrote = await Brote.findById(req.params.broteid);
          if (paramsBrote) {
            await Brote.findOneAndUpdate(
              { _id: req.params.broteid },
              {
                $set: { name: req.body.name, description: req.body.description },
                initialdate: req.body.initialdate, finaldate: req.body.finaldate,
              },
              { new: true }
            ).then((updatedBrote) => {
              console.log(
                `Brote con id ${req.params.broteid} modificado: ${updatedBrote}`
              );
              res.status(201).json(updatedBrote);
            });
          } else {
            console.log(`Brote con id ${req.params.broteid} no encontrado`);
            res
              .status(404)
              .json(`Brote con id ${req.params.broteid} no ecnotrado`);
          }
        } catch (error) {
          console.log(`\n` + error);
          res.status(500).json(`${error}`);
        }
      }
}
const controller: BroteController = new BroteController();
export default controller;

