import { Component } from '@angular/core';
import { Sidebar } from '../layout/sidebar/sidebar';
import { Header } from '../layout/header/header';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Sidebar, Header],
  template: `
    <div class="flex min-h-screen bg-slate-50">

      <app-sidebar />

      <main class="flex-1">

        <app-header />

        <section class="p-8">

          <h2 class="text-2xl font-bold text-slate-800 mb-6">
            Overview
          </h2>

          <div class="grid grid-cols-3 gap-6">

            <div class="bg-white p-6 rounded-xl shadow-sm">
              <p class="text-slate-500">Total Tasks</p>
              <h3 class="text-3xl font-bold mt-2">0</h3>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-sm">
              <p class="text-slate-500">Pending Tasks</p>
              <h3 class="text-3xl font-bold mt-2">0</h3>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-sm">
              <p class="text-slate-500">Completed Tasks</p>
              <h3 class="text-3xl font-bold mt-2">0</h3>
            </div>

          </div>

        </section>

      </main>

    </div>
  `
})
export class Dashboard {}