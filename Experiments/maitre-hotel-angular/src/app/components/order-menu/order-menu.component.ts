import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, OrderItem } from '../../models/product.model';

@Component({
  selector: 'app-order-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="order-menu">
      <h2>Ordering for Table {{ selectedTable }}</h2>

      <div class="ordering-mode">
        <div class="product-list">
          <h3>Available Products</h3>
          <div class="products-grid">
            @for (product of availableProducts; track product.name) {
              <div class="product-card" (click)="onAddProduct.emit(product)">
                <span class="product-name">{{ product.name }}</span>
                <span class="product-price">€{{ product.price }}</span>
              </div>
            }
          </div>
        </div>

        <div class="order-section">
          <div class="controls">
            <button (click)="onClose.emit()" class="btn-secondary">Close Ordering Mode</button>
            <button (click)="onGetBill.emit()" class="btn-success">Get Bill</button>
            <button (click)="onClearAll.emit()" class="btn-warning">Clear All</button>
          </div>

          <div class="current-order">
            <h3>Current Order (Total: €{{ calculateTotal() }})</h3>
            @if (orders && orders.length > 0) {
              <div class="order-items">
                @for (item of orders; track item.name) {
                  <div class="order-item">
                    <span class="item-name">{{ item.name }}</span>
                    <span class="item-quantity">x{{ item.quantity }}</span>
                    <span class="item-price">€{{ item.price * item.quantity }}</span>
                    <div class="item-actions">
                      <button (click)="onAddProduct.emit(item)" class="btn-small">+</button>
                      <button (click)="onDecreaseProduct.emit(item.name)" class="btn-small">-</button>
                      <button (click)="onRemoveProduct.emit(item.name)" class="btn-small btn-danger">×</button>
                    </div>
                  </div>
                }
              </div>
            } @else {
              <p class="empty-order">No items ordered yet</p>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .order-menu {
      padding: 1rem;
    }

    .ordering-mode {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;
    }

    .product-list {
      flex: 1;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .product-card {
      padding: 1rem;
      background: #f0f0f0;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      transition: transform 0.2s, background 0.2s;
    }

    .product-card:hover {
      background: #e0e0e0;
      transform: translateY(-2px);
    }

    .product-name {
      font-weight: 600;
    }

    .product-price {
      color: #537f4b;
      font-size: 1.1rem;
    }

    .order-section {
      flex: 1;
    }

    .controls {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .current-order {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .order-items {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .order-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem;
      background: #f9f9f9;
      border-radius: 4px;
    }

    .item-name {
      flex: 1;
    }

    .item-quantity {
      font-weight: 600;
      min-width: 40px;
    }

    .item-price {
      min-width: 60px;
      text-align: right;
      color: #537f4b;
    }

    .item-actions {
      display: flex;
      gap: 0.25rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: opacity 0.2s;
    }

    button:hover {
      opacity: 0.8;
    }

    .btn-secondary {
      background: #6c757d;
      color: white;
    }

    .btn-success {
      background: #28a745;
      color: white;
    }

    .btn-warning {
      background: #ffc107;
      color: black;
    }

    .btn-small {
      padding: 0.25rem 0.5rem;
      font-size: 0.8rem;
      background: #007bff;
      color: white;
    }

    .btn-danger {
      background: #dc3545;
    }

    .empty-order {
      color: #666;
      font-style: italic;
      text-align: center;
      padding: 2rem;
    }

    h3 {
      margin-top: 0;
    }
  `]
})
export class OrderMenuComponent {
  @Input() selectedTable!: string;
  @Input() availableProducts!: Product[];
  @Input() orders: OrderItem[] = [];

  @Output() onAddProduct = new EventEmitter<Product>();
  @Output() onDecreaseProduct = new EventEmitter<string>();
  @Output() onRemoveProduct = new EventEmitter<string>();
  @Output() onClearAll = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();
  @Output() onGetBill = new EventEmitter<void>();

  calculateTotal(): number {
    return this.orders.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
