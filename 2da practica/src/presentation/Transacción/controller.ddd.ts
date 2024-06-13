import { Request, Response } from 'express';
import { CreateTransaccionDto, UpdateTransaccionDto } from '../../domain/dtos';
import { TransaccionRepository } from '../../domain';

export class TransaccionController {

  constructor(
    private readonly transaccionRepository: TransaccionRepository,
  ) { }

  public getTransacciones = async (req: Request, res: Response) => {
    const transacciones = await this.transaccionRepository.getAll();
    return res.json(transacciones);
  };

  public getTransaccionById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const transaccion = await this.transaccionRepository.findById(id);
      res.json(transaccion);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createTransaccion = async (req: Request, res: Response) => {
    const [error, createTransaccionDto] = CreateTransaccionDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const transaccion = await this.transaccionRepository.create(createTransaccionDto!);
    res.json(transaccion);
  };

  public updateTransaccion = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTransaccionDto] = UpdateTransaccionDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedTransaccion = await this.transaccionRepository.updateById(updateTransaccionDto!);
    return res.json(updatedTransaccion);
  };

  public deleteTransaccion = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedTransaccion = await this.transaccionRepository.deleteById(id);
    res.json(deletedTransaccion);
  };
}
