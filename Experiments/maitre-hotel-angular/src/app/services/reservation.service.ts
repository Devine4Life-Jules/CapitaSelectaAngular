import { Injectable, signal, computed } from '@angular/core';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  // Using Angular signals for reactive state
  private reservationsSignal = signal<Reservation[]>([
    { name: 'Jules', time: new Date(2025, 9, 18, 13, 23), people: 3 }
  ]);

  // Public readonly signal
  readonly reservations = this.reservationsSignal.asReadonly();

  // Computed signals for filtering reservations
  readonly upcomingReservations = computed(() => {
    const now = new Date();
    return this.reservationsSignal()
      .filter(res => res.time > now)
      .sort((a, b) => a.time.getTime() - b.time.getTime());
  });

  readonly lateReservations = computed(() => {
    const now = new Date();
    return this.reservationsSignal()
      .filter(res => res.time <= now)
      .sort((a, b) => a.time.getTime() - b.time.getTime());
  });

  addReservation(reservation: Reservation): void {
    this.reservationsSignal.update(reservations =>
      [...reservations, reservation].sort((a, b) => a.time.getTime() - b.time.getTime())
    );
  }

  removeReservation(reservation: Reservation): void {
    this.reservationsSignal.update(reservations =>
      reservations.filter(res => res !== reservation)
    );
  }
}
