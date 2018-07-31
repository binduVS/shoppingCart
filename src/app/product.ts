export interface IProduct{
    productId:number;
    ProductName : string;
    ProductDescription : string;
    ProductPrice : number;
    ProductBrand : string;
    ProductColor : string;
    imageUrl : string;  
    carouselUrl : string;
    tags:{
        range : any;
        style: string,
        species: string
      },
    starRating :number;
}