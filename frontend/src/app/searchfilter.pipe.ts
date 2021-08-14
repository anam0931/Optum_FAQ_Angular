import { Pipe, PipeTransform } from '@angular/core';
import { Faq } from './components/accordion-toggle/accordion-toggle.component';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(faq: Faq[], searchValue: string): Faq[] {

    if(!faq) return faq;
        if(!searchValue)return faq;

        searchValue = searchValue.toLowerCase();

        return faq.filter(function(item){
            return JSON.stringify(item).toLowerCase().includes(searchValue);
        });
  }

}
