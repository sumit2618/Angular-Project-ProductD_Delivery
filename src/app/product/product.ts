export class Product {
  productName: string;
  productPrice: number;
  productColor: string;
  productType: string;
  productQuantity: number;
  productImage: string;

  constructor(productName: string, productPrice: number, productColor: string, productType: string, productQuantity: number, productImage: string) {

    this.productName = productName;
    this.productPrice = productPrice;
    this.productColor = productColor;
    this.productType = productType;
    this.productQuantity = productQuantity;
    this.productImage = productImage;
  }
}
