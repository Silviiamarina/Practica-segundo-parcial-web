import { Request, Response } from 'express';
import { CreateCajaDto, UpdateCajaDto } from '../../domain/dtos';
import { CajaRepository } from '../../domain';

export class CajaController {

  constructor(
    private readonly cajaRepository: CajaRepository,
  ) { }

  public getCajas = async (req: Request, res: Response) => {
    const cajas = await this.cajaRepository.getAll();
    return res.json(cajas);
  };

  public getCajaById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const caja = await this.cajaRepository.findById(id);
      res.json(caja);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createCaja = async (req: Request, res: Response) => {
    const [error, createCajaDto] = CreateCajaDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const caja = await this.cajaRepository.create(createCajaDto!);
    res.json(caja);
  };

  public updateCaja = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCajaDto] = UpdateCajaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedCaja = await this.cajaRepository.updateById(updateCajaDto!);
    return res.json(updatedCaja);
  };

  public deleteCaja = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedCaja = await this.cajaRepository.deleteById(id);
    res.json(deletedCaja);
  };
}
