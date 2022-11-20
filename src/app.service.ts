import {Injectable} from "@nestjs/common";


@Injectable()
export class AppService{
    Hello(){
        return "Hello world!"
    }
}