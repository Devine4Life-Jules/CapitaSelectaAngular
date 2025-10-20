import { Injectable, signal, computed } from '@angular/core';
import { OrderItem, Product, TableOrders } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // Using Angular signals for reactive state management
  private ordersSignal = signal<TableOrders>({
    table1: [{ name: 'Water', price: 2, quantity: 1 }],
    table6: [{ name: 'Hamburger', price: 19, quantity: 2 }],
    barSpot2: [{ name: 'Coke', price: 2, quantity: 3 }],
  });

  // Public readonly signal for components to read
  readonly orders = this.ordersSignal.asReadonly();

  // Computed signal example - could calculate total orders count
  readonly totalOrdersCount = computed(() => {
    const allOrders = this.ordersSignal();
    return Object.values(allOrders).reduce((total, items) =>
      total + items.reduce((sum, item) => sum + item.quantity, 0), 0
    );
  });

  getOrdersForTable(tableId: string): OrderItem[] {
    return this.ordersSignal()[tableId] || [];
  }

  addProductToTable(tableId: string, product: Product): void {
    this.ordersSignal.update(orders => {
      const tableOrders = orders[tableId] || [];
      const existingItem = tableOrders.find(item => item.name === product.name);

      if (existingItem) {
        // Increase quantity if product already exists
        return {
          ...orders,
          [tableId]: tableOrders.map(item =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        // Add new product with quantity 1
        return {
          ...orders,
          [tableId]: [...tableOrders, { ...product, quantity: 1 }]
        };
      }
    });
  }

  decreaseProduct(tableId: string, productName: string): void {
    this.ordersSignal.update(orders => {
      const tableOrders = orders[tableId] || [];
      return {
        ...orders,
        [tableId]: tableOrders
          .map(item =>
            item.name === productName
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      };
    });
  }

  removeProduct(tableId: string, productName: string): void {
    this.ordersSignal.update(orders => {
      const tableOrders = orders[tableId] || [];
      return {
        ...orders,
        [tableId]: tableOrders.filter(item => item.name !== productName)
      };
    });
  }

  clearTableOrders(tableId: string): void {
    this.ordersSignal.update(orders => ({
      ...orders,
      [tableId]: []
    }));
  }

  calculateTotal(tableId: string): number {
    const tableOrders = this.getOrdersForTable(tableId);
    return tableOrders.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  hasOrders(tableId: string): boolean {
    const tableOrders = this.ordersSignal()[tableId];
    return tableOrders && tableOrders.length > 0;
  }
}
