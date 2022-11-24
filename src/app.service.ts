import {Injectable} from "@nestjs/common";
const facts = require("../constants/facts.json")

@Injectable()
export class AppService{

    getFact(){
        return facts[Math.floor(Math.random() * facts.length)]
    }

}