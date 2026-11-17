import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 class="text-2xl font-bold mb-10">
        Task<span class="text-indigo-400">Flow</span>
      </h1>

      <nav class="space-y-3">

        <a href="#" class="block bg-indigo-600 p-3 rounded-lg">
          Dashboard
        </a>

        <a href="#" class="block p-3 text-slate-300 hover:bg-slate-800 rounded-lg">
          All Tasks
        </a>

        <a href="#" class="block p-3 text-slate-300 hover:bg-slate-800 rounded-lg">
          Completed
        </a>

      </nav>

    </aside>
  `
})
export class Sidebar {}