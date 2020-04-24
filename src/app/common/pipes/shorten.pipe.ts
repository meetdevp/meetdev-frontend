import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(value:string, limit?:number){
        if (!value)
        return null;
        let actualLimit = (limit)? limit : 20;
        if(value.length > actualLimit){
            return value.substr(0,actualLimit) + '...';
        }
        else 
            return value;
    }
} 