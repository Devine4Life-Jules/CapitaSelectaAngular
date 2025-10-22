import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="reservations-page">
      <h2>Reservations</h2>

      <form [formGroup]="reservationForm" (ngSubmit)="onSubmit()" class="reservation-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            id="name"
            type="text"
            formControlName="name"
            placeholder="Enter name"
            [class.invalid]="reservationForm.get('name')?.invalid && reservationForm.get('name')?.touched"
          />
          @if (reservationForm.get('name')?.invalid && reservationForm.get('name')?.touched) {
            <span class="error">Name is required</span>
          }
        </div>

        <div class="form-group">
          <label for="time">Time:</label>
          <input
            id="time"
            type="time"
            formControlName="hour"
            [class.invalid]="reservationForm.get('hour')?.invalid && reservationForm.get('hour')?.touched"
          />
          @if (reservationForm.get('hour')?.invalid && reservationForm.get('hour')?.touched) {
            <span class="error">Time is required</span>
          }
        </div>

        <div class="form-group">
          <label for="people">Number of People:</label>
          <input
            id="people"
            type="number"
            formControlName="people"
            placeholder="Number of guests"
            min="1"
            [class.invalid]="reservationForm.get('people')?.invalid && reservationForm.get('people')?.touched"
          />
          @if (reservationForm.get('people')?.invalid && reservationForm.get('people')?.touched) {
            <span class="error">Must be at least 1 person</span>
          }
        </div>

        <button type="submit" [disabled]="reservationForm.invalid" class="btn-submit">
          Add Reservation
        </button>
      </form>

      <div class="reservation-section">
        <h3>Upcoming Reservations</h3>
        @if (reservationService.upcomingReservations().length > 0) {
          <div class="reservation-list">
            @for (reservation of reservationService.upcomingReservations(); track reservation.name + reservation.time) {
              <div class="reservation-item">
                <div class="reservation-info">
                  <span class="reservation-name">{{ reservation.name }}</span>
                  <span class="reservation-time">{{ reservation.time | date: 'shortTime' }}</span>
                  <span class="reservation-people">{{ reservation.people }} people</span>
                </div>
                <button (click)="removeReservation(reservation)" class="btn-remove">Remove</button>
              </div>
            }
          </div>
        } @else {
          <p class="empty-message">No upcoming reservations</p>
        }
      </div>

      @if (reservationService.lateReservations().length > 0) {
        <div class="reservation-section late">
          <h3>Late Reservations</h3>
          <div class="reservation-list">
            @for (reservation of reservationService.lateReservations(); track reservation.name + reservation.time) {
              <div class="reservation-item late-item">
                <div class="reservation-info">
                  <span class="reservation-name">{{ reservation.name }}</span>
                  <span class="reservation-time">{{ reservation.time | date: 'shortTime' }}</span>
                  <span class="reservation-people">{{ reservation.people }} people</span>
                </div>
                <button (click)="removeReservation(reservation)" class="btn-remove">Remove</button>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .reservations-page {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    h2 {
      margin-top: 0;
    }

    .reservation-form {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .form-group input {
      width: 100%;
      padding: 0.5rem;
      border: 2px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.2s;
    }

    .form-group input:focus {
      outline: none;
      border-color: #007bff;
    }

    .form-group input.invalid {
      border-color: #dc3545;
    }

    .error {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      display: block;
    }

    .btn-submit {
      background: #28a745;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      width: 100%;
      transition: background 0.2s;
    }

    .btn-submit:hover:not(:disabled) {
      background: #218838;
    }

    .btn-submit:disabled {
      background: #6c757d;
      cursor: not-allowed;
    }

    .reservation-section {
      margin-bottom: 2rem;
    }

    .reservation-section h3 {
      margin-bottom: 1rem;
    }

    .reservation-section.late h3 {
      color: #dc3545;
    }

    .reservation-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .reservation-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }

    .reservation-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }

    .reservation-item.late-item {
      background: #fff5f5;
      border-left: 4px solid #dc3545;
    }

    .reservation-info {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .reservation-name {
      font-weight: 600;
      min-width: 120px;
    }

    .reservation-time {
      color: #666;
    }

    .reservation-people {
      color: #537f4b;
      font-weight: 500;
    }

    .btn-remove {
      background: #dc3545;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-remove:hover {
      background: #c82333;
    }

    .empty-message {
      text-align: center;
      color: #666;
      font-style: italic;
      padding: 2rem;
      background: white;
      border-radius: 8px;
    }
  `]
})
export class ReservationsComponent {
  private fb = inject(FormBuilder);
  reservationService = inject(ReservationService);

  reservationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    hour: ['', Validators.required],
    people: [1, [Validators.required, Validators.min(1)]]
  });

  onSubmit(): void {
    if (this.reservationForm.valid) {
      const formValue = this.reservationForm.value;
      const [hours, minutes] = formValue.hour!.split(':');
      const time = new Date();
      time.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

      const newReservation: Reservation = {
        name: formValue.name!,
        time: time,
        people: formValue.people!
      };

      this.reservationService.addReservation(newReservation);
      this.reservationForm.reset({ people: 1 });
    }
  }

  removeReservation(reservation: Reservation): void {
    this.reservationService.removeReservation(reservation);
  }
}
