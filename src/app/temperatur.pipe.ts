import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})
export class TemperaturePipe implements PipeTransform{
    transform(value: string | number | null, inputType:'cel' | 'fah', outputType?:'cel' | 'fah') { //first argument is value and 2nd argument is the configuration for the pipe like 'medium' to the date pipe
        if(!value){
            return;
        }
        
        let val: number;

        if(typeof value === 'string'){
            val = parseFloat(value); //converts string to float
        } else{
            val = value;
        }
        let outputTemp:number;
        if(inputType==='cel' && outputType === 'fah'){
            outputTemp = val * (9/5) + 32; //converting celsius to farenheit.
        } else if(inputType === 'fah' && outputType === 'cel'){
            outputTemp = (val-32) * (5/9); //converting from farenheit to celsius
        } else{ //when both input and output have same type or output type is not mentioned
            outputTemp = val;
        }
        let symbol: '°C' | '°F'
        if(!outputType){
            symbol = inputType === 'cel' ? '°C' : '°F';
        } else{
            symbol = outputType == 'cel'? '°C' : '°F';
        }
        return `${outputTemp.toFixed(2)} ${symbol}`;
    }
}