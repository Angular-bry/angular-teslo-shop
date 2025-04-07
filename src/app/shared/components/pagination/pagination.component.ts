import { Component, computed, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  pages = input(0);
  currentPage = input(1);

  activePage = linkedSignal(this.currentPage);

  getPageList = computed(() => {
    return Array.from({ length: this.pages() }, (_, i) => i + 1);
  })
}
