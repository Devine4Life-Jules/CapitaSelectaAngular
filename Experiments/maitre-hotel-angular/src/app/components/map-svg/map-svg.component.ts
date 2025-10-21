import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-svg',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1920 1080" class="map">
      <g>
        <g id="Layer_1">
          <g>
            <rect fill="white" x=".5" y=".5" width="1919" height="1079" />
            <path d="M1919,1v1078H1V1h1918M1920,0H0v1080h1920V0h0Z" />
          </g>
        </g>
        <g id="Bar">
          <g>
            <rect fill="#b7b7b7" x="1079.1" y="133.1" width="840.4" height="134.2" />
            <path d="M1919,133.6v133.2h-839.4v-133.2h839.4M1920,132.6h-841.4v135.2h841.4v-135.2h0Z" />
          </g>
        </g>

        @for (table of tables; track table.id) {
          <g [id]="table.id" class="spot" (click)="onTableClick(table.id)" style="cursor: pointer;">
            @for (rect of table.rects; track $index) {
              <rect [attr.fill]="getTableFill(table.id)" [attr.x]="rect.x" [attr.y]="rect.y"
                    [attr.width]="rect.width" [attr.height]="rect.height" />
            }
          </g>
        }
      </g>
    </svg>
  `,
  styles: [`
    .map {
      width: 100%;
      height: 100%;
    }
    .spot:hover rect {
      opacity: 0.8;
    }
  `]
})
export class MapSvgComponent {
  @Input() getTableFill!: (tableId: string) => string;
  @Output() tableClick = new EventEmitter<string>();

  tables = [
    {
      id: 'table1',
      rects: [
        { x: 178.6, y: 567.7, width: 196.5, height: 396.3 },
        { x: 411.2, y: 860.1, width: 89.4, height: 89.4 },
        { x: 411.2, y: 723.8, width: 89.4, height: 89.4 },
        { x: 411.2, y: 587.5, width: 89.4, height: 89.4 },
        { x: 55, y: 860.1, width: 89.4, height: 89.4 },
        { x: 55, y: 723.8, width: 89.4, height: 89.4 },
        { x: 55, y: 587.5, width: 89.4, height: 89.4 },
      ]
    },
    {
      id: 'table2',
      rects: [
        { x: 822.6, y: 679.7, width: 196.5, height: 222 },
        { x: 698.6, y: 814.2, width: 89.4, height: 89.4 },
        { x: 698.6, y: 677.9, width: 89.4, height: 89.4 },
        { x: 1045.5, y: 814.2, width: 89.4, height: 89.4 },
        { x: 1045.5, y: 677.9, width: 89.4, height: 89.4 },
      ]
    },
    {
      id: 'table3',
      rects: [
        { x: 1310.4, y: 666.7, width: 396.3, height: 196.5 },
        { x: 1319.9, y: 899.2, width: 89.4, height: 89.4 },
        { x: 1456.2, y: 899.2, width: 89.4, height: 89.4 },
        { x: 1592.5, y: 899.2, width: 89.4, height: 89.4 },
        { x: 1319.9, y: 543.1, width: 89.4, height: 89.4 },
        { x: 1456.2, y: 543.1, width: 89.4, height: 89.4 },
        { x: 1592.5, y: 543.1, width: 89.4, height: 89.4 },
      ]
    },
    {
      id: 'table4',
      rects: [
        { x: 152.7, y: 82.5, width: 89.4, height: 89.4 },
        { x: 152.7, y: 363.7, width: 89.4, height: 89.4 },
        { x: 118.3, y: 186.3, width: 158.1, height: 158.1 },
      ]
    },
    {
      id: 'table5',
      rects: [
        { x: 376.8, y: 82.5, width: 89.4, height: 89.4 },
        { x: 376.8, y: 363.7, width: 89.4, height: 89.4 },
        { x: 342.5, y: 186.3, width: 158.1, height: 158.1 },
      ]
    },
    {
      id: 'table6',
      rects: [
        { x: 600.3, y: 82.5, width: 89.4, height: 89.4 },
        { x: 600.3, y: 363.7, width: 89.4, height: 89.4 },
        { x: 566, y: 186.3, width: 158.1, height: 158.1 },
      ]
    },
    {
      id: 'barSpot1',
      rects: [{ x: 1084.1, y: 317.5, width: 89.4, height: 89.4 }]
    },
    {
      id: 'barSpot2',
      rects: [{ x: 1225.1, y: 317.5, width: 89.4, height: 89.4 }]
    },
    {
      id: 'barSpot3',
      rects: [{ x: 1370.1, y: 317.5, width: 89.4, height: 89.4 }]
    },
    {
      id: 'barSpot4',
      rects: [{ x: 1514.1, y: 317.5, width: 89.4, height: 89.4 }]
    },
    {
      id: 'barSpot5',
      rects: [{ x: 1667.6, y: 317.5, width: 89.4, height: 89.4 }]
    },
  ];

  onTableClick(tableId: string): void {
    this.tableClick.emit(tableId);
  }
}
