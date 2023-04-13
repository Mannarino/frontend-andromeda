import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges{
  @Input () numberOfelementsInApirest:number
  @Output () paginar: EventEmitter<string> = new EventEmitter();
  toPaginar
  constructor() { }

  ngOnInit(): void {
   this.toPaginar=this.creartePaginator(this.numberOfelementsInApirest,8,8)
  }
  // aplico el ngOnchages porque psaba que se carbaga el componente paginador con valor undifined
  // en la propiedad numberOfelementsInApirest porque todabai no habia llegado la respeusta del
  // servidor sobre cuantos elementos tiene la apirest por esose cargaba undenined ya q llegaba mas tarde 
  // de lo que le llebava al paginato contruirse y renderizarse, por eso con el ngInchanges puse que se vuelva 
  // arenderizar cuando note el cambio en el valor de esa propiedad en la propiedad input
  ngOnChanges() {
    this.toPaginar=this.creartePaginator(this.numberOfelementsInApirest,8,8)
  }

  // This method (createPaginator) receives as a parameter the number of elements that the array of the
  // apirest which will have to be paginated, then a number that indicates the number of elements per page
  // for pagination, and the third is also the number of items per page, between the last two parameters
  // the configuration of how many elements per page is built (the limit and the skip)
  // and returns an array of objects to iterate through the view
  creartePaginator(numberOfelementsInApirest, limit:number,numberOfelementsPerPage){
    
    let numberOfpages = numberOfelementsInApirest / numberOfelementsPerPage
    let arrayPaginator = []
    let skip = 0
    let pagina = 1
    
    for (var i = 0; i < numberOfpages; i++) {
      var item= {limit,skip,pagina,select:false} 
      skip= skip + numberOfelementsPerPage
      pagina= pagina +1
      
      arrayPaginator.push(item)
    }
    
    arrayPaginator[0].select=true
      
    console.log(arrayPaginator)
    return arrayPaginator
    
  }
  paginate(item){
    this.paginar.emit(item);
  }
  cambiarSelect(pagina){
    this.toPaginar.forEach(element => {
      element.select=false
      if(element.pagina===pagina){
        element.select=true
      }
    });
    console.log(pagina)
  }
}
