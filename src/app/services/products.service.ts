import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // 品牌一律大寫
  products = [
    {
      id: 0,
      name: 'ASUS S510UN',
      price: 14999,
      description: '輕薄、窄邊框、背光鍵盤',
      img: '../../assets/img/products/asus-nb.jpg',
      size: '15.6" FHD 螢幕 (LED) 1920X1080',
      cpu: 'Intel® Core™ i5-8250U processor 1.6 GHz (6M Cache, up to 3.4 GHz) ',
      gpu: 'Nvidia MX 150 2G獨顯',
      ram: 'DDR4 4G DDR4 2133MHz (Max 16G)',
      storage: '256G SSD',
    },
    {
      id: 1,
      name: 'ACER SP111-32N-C3TR',
      price: 9999,
      description: '文書、觸控',
      img: '../../assets/img/products/acer-nb.jpg',
      size: '11.6"FHD 觸控(w/ IPS技術)(LED背光) ',
      cpu: 'Intel Celeron Processor N3350 (2.0GHz/2.5GHz) ',
      gpu: 'Intel® HD Graphics 500 ',
      ram: '4GB DDR3L ',
      storage: '64GB eMMC',
    },
    {
      id: 2,
      name: 'MSI GT80-223',
      price: 69800,
      description: '電競筆電、機械鍵盤',
      img: '../../assets/img/products/msi-nb.jpg',
      size: '18.4吋 WLED FHD (1920 x 1080)',
      cpu: 'Intel®第四代Core™ i7 4720HQ四核心處理器 ',
      gpu: 'nVIDIA GeForce GTX965M SLI GDDR5 4GB VRAM',
      ram: 'DDR4 4G DDR4 2133MHz (Max 16G)',
      storage: '128G M.2 SSD + 1TB HDD 7200rpm',
    }
  ];

  originalProducts = this.products;
  search(keyword) {
    if (keyword.trim() === '') {
      this.products = this.originalProducts;
    } else {
      this.products = this.originalProducts.filter(
        product => product.name.indexOf(keyword) !== -1
      );
    }
  }

  constructor() { }
}
