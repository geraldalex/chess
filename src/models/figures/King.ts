import { Figure, FigureName } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'


export class King extends Figure{
    constructor(color: Colors, cell: Cell){
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.KING;
    }

    canMove(target: Cell): boolean {
        if(  !super.canMove(target))
        return false
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        
        return ((dx === 1 && dy === 1) || (dx === 1 && dy === 0) ) || ((dx === 0 && dy === 1) || (dx === 1 && dy === 0))
        
     }
}