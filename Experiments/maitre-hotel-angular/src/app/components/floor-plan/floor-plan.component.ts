import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSvgComponent } from '../map-svg/map-svg.component';
import { OrderMenuComponent } from '../order-menu/order-menu.component';
import { BillModalComponent } from '../bill-modal/bill-modal.component';
import { OrderService } from '../../services/order.service';
import { AVAILABLE_PRODUCTS } from '../../data/products.data';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-floor-plan',
  standalone: true,
  imports: [CommonModule, MapSvgComponent, OrderMenuComponent, BillModalComponent],
  template: `
    <div class="floor-plan">
      @if (isOrdering) {
        <app-order-menu
          [selectedTable]="selectedTable!"
          [availableProducts]="availableProducts"
          [orders]="orderService.getOrdersForTable(selectedTable!)"
          (onAddProduct)="handleProductSelect($event)"
          (onDecreaseProduct)="handleDecreaseProduct($event)"
          (onRemoveProduct)="handleRemoveProduct($event)"
          (onClearAll)="handleClearAll()"
          (onClose)="handleCloseOrdering()"
          (onGetBill)="handleGetBill()"
        />
      } @else {
        <app-map-svg
          [getTableFill]="getTableFill.bind(this)"
          (tableClick)="handleTableClick($event)"
        />
      }

      <app-bill-modal
        [isOpen]="showBill"
        [orders]="selectedTable ? orderService.getOrdersForTable(selectedTable) : []"
        [total]="selectedTable ? orderService.calculateTotal(selectedTable) : 0"
        (onClose)="handleCloseBill()"
      />
    </div>
  `,
  styles: [`
    .floor-plan {
      width: 100%;
      height: 100%;
    }
  `]
})
export class FloorPlanComponent {
  // Dependency Injection - Angular's core feature
  orderService = inject(OrderService);

  selectedTable: string | null = null;
  isOrdering = false;
  showBill = false;
  availableProducts = AVAILABLE_PRODUCTS;

  handleTableClick(tableId: string): void {
    this.isOrdering = true;
    this.selectedTable = tableId;
  }

  handleCloseOrdering(): void {
    this.isOrdering = false;
    this.selectedTable = null;
  }

  handleProductSelect(product: Product): void {
    if (this.selectedTable) {
      this.orderService.addProductToTable(this.selectedTable, product);
    }
  }

  handleDecreaseProduct(productName: string): void {
    if (this.selectedTable) {
      this.orderService.decreaseProduct(this.selectedTable, productName);
    }
  }

  handleRemoveProduct(productName: string): void {
    if (this.selectedTable) {
      this.orderService.removeProduct(this.selectedTable, productName);
    }
  }

  handleClearAll(): void {
    if (this.selectedTable) {
      this.orderService.clearTableOrders(this.selectedTable);
    }
  }

  handleGetBill(): void {
    this.showBill = true;
  }

  handleCloseBill(): void {
    this.showBill = false;
  }

  getTableFill(tableId: string): string {
    return this.orderService.hasOrders(tableId) ? '#FF6347' : '#537f4b';
  }
}
