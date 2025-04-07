import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})
export class CalenderComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    editable: true,
    selectable: true,
    droppable: true,
    events: [
      { title: 'Ereignis 1', date: '2025-04-07' },
      { title: 'Ereignis 2', date: '2025-04-08' }
    ],
    drop: (info) => {
      console.log('Element wurde gedroppt auf:', info.dateStr);
    }
}

ngAfterViewInit() {
  const calendarEl = this.elementRef.nativeElement.querySelector('full-calendar');
  new Draggable(calendarEl, {
    itemSelector: '.todo-item',
    eventData: (eventEl) => {
      return {
        title: eventEl.innerText
      };
    }
  });
}
}
