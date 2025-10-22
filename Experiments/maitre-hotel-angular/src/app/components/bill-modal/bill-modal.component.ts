import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationCallbackEvent } from '@angular/core';
import { OrderItem } from '../../models/product.model';

@Component({
  selector: 'app-bill-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isOpen) {
      <div class="modal-overlay" (click)="onClose.emit()" (animate.leave)="handleLeave($event)">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <h2>Bill</h2>
            <button class="close-btn" (click)="onClose.emit()">×</button>
          </div>

          <div class="modal-body">
            @if (orders && orders.length > 0) {
              <table class="bill-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  @for (item of orders; track item.name) {
                    <tr>
                      <td>{{ item.name }}</td>
                      <td>{{ item.quantity }}</td>
                      <td>€{{ item.price }}</td>
                      <td>€{{ item.price * item.quantity }}</td>
                    </tr>
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3"><strong>Total</strong></td>
                    <td><strong>€{{ total }}</strong></td>
                  </tr>
                </tfoot>
              </table>
            } @else {
              <p class="empty-bill">No items to bill</p>
            }
          </div>

          <div class="modal-footer">
            <button class="btn-primary" (click)="onClose.emit()">Close</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 1;
      transition: opacity 200ms ease-out;

      @starting-style {
        opacity: 0;
      }
    }

    .modal-overlay.leaving {
      opacity: 0;
      transition: opacity 150ms ease-in;
    }

    .modal-content {
      background: white;
      border-radius: 12px;
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      transform: scale(1);
      transition: transform 200ms ease-out;

      @starting-style {
        transform: scale(0.9);
      }
    }

    .modal-overlay.leaving .modal-content {
      transform: scale(0.9);
      transition: transform 150ms ease-in;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 1px solid #e0e0e0;
    }

    .modal-header h2 {
      margin: 0;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #666;
      padding: 0;
      width: 30px;
      height: 30px;
      line-height: 1;
    }

    .close-btn:hover {
      color: #000;
    }

    .modal-body {
      padding: 1.5rem;
      overflow-y: auto;
      flex: 1;
    }

    .bill-table {
      width: 100%;
      border-collapse: collapse;
    }

    .bill-table th,
    .bill-table td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }

    .bill-table th {
      background: #f5f5f5;
      font-weight: 600;
    }

    .bill-table tfoot td {
      border-top: 2px solid #333;
      padding-top: 1rem;
    }

    .empty-bill {
      text-align: center;
      color: #666;
      padding: 2rem;
      font-style: italic;
    }

    .modal-footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid #e0e0e0;
      display: flex;
      justify-content: flex-end;
    }

    .btn-primary {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }

    .btn-primary:hover {
      background: #0056b3;
    }
  `]
})
export class BillModalComponent {
  @Input() isOpen = false;
  @Input() orders: OrderItem[] = [];
  @Input() total = 0;

  @Output() onClose = new EventEmitter<void>();

  handleLeave(event: AnimationCallbackEvent): void {
    const element = event.target as HTMLElement;
    element.classList.add('leaving');

    setTimeout(() => {
      event.animationComplete();
    }, 150);
  }
}
