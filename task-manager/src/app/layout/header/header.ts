import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="flex items-center justify-between bg-white p-5 border-b">

      <div>
        <h2 class="text-xl font-semibold text-slate-800">
          Dashboard
        </h2>

        <p class="text-sm text-slate-500">
          Manage your tasks efficiently
        </p>
      </div>

      <button class="bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700">
        + Add Task
      </button>

    </header>
  `
})
export class Header {}