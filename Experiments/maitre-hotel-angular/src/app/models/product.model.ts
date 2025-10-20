export interface Product {
  name: string;
  price: number;
}

export interface OrderItem extends Product {
  quantity: number;
}

export interface TableOrders {
  [tableId: string]: OrderItem[];
}
