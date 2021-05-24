import {Router, Request, Response} from "express";
import UserService from "../../services/userService";

const routes: Router = Router();

const users = (router: Router) => {
    router.use('/users', routes);

    routes.get('/', async (req: Request, res: Response) => {
        // express nao exporta a interface ReqQuery
        let queryParams: any = req.query;
        let result = await UserService.listUsers(queryParams);
        res.status(200).send(result);
    })

    routes.get('/:userId', async (req: Request, res: Response) => {
        let result = await UserService.findById(req.params.userId);
        res.status(200).send(result);
    })

    routes.put('/:userId', async (req: Request, res: Response) => {
        let result = await UserService.updateUser(req.params.userId, req.body);
        console.log(result)
        res.status(200).send(result);
    })

    routes.delete('/:userId', async (req: Request, res: Response) => {
        let result = await UserService.deleteUser(req.params.userId);
        res.status(200).send(result);
    })
    
}

export default users;