import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'function_caller' })
export class FunctionCallerPipe implements PipeTransform {
  transform(func: any, ...args: any[]): any {
    if (typeof func !== 'function') {
      throw new Error('Expected a function');
    }
    if (args.length === 0) {
      return func;
    }

    return func(...args);
  }
}
