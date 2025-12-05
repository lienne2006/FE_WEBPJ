import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import CustomerReview from './components/CustomerReview/CustomerReview';
import Sidebar from './components/Layout/Sidebar';
import styles from './App.module.css';
import './App.global.css'; // File CSS cho các style toàn cục như font, reset

// Dữ liệu giả (sẽ được thay thế bằng backend)
const sidebarItemsRomdol = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠', active: true },
  { id: 'orders', label: 'Quản lý đơn hàng', icon: '📦' },
  { id: 'menu', label: 'Thực đơn', icon: '🍔' },
  { id: 'revenue', label: 'Thống kê doanh thu', icon: '💰' },
  { id: 'feedback', label: 'Phản hồi của khách hàng', icon: '💬' },
  { id: 'detail', label: 'Chi tiết khách hàng', icon: '👤' },
];

const sidebarItemsKFC = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠', active: true },
  { id: 'orders', label: 'Quản lý đơn hàng', icon: '📦' },
  { id: 'menu', label: 'Thực đơn', icon: '🍔' },
  { id: 'revenue', label: 'Thống kê doanh thu', icon: '💰' },
  { id: 'feedback', label: 'Phản hồi của khách hàng', icon: '💬' },
  { id: 'detail', label: 'Chi tiết khách hàng', icon: '👤' },
];

function App() {
  // state để chuyển đổi giữa 2 layout
  const [layout, setLayout] = useState('romdol'); // 'romdol' hoặc 'kfc'

  return (
    <div className={styles.appContainer}>
      <Sidebar
        logo={layout === 'romdol' ? 'Romdol.' : 'KFC Logo'} // Thay bằng component <img/>
        title={layout === 'romdol' ? 'Modern Admin Dashboard' : ''}
        items={layout === 'romdol' ? sidebarItemsRomdol : sidebarItemsKFC}
      />
      <main className={styles.mainContent}>
        {layout === 'romdol' ? (
          <Dashboard />
        ) : (
          <CustomerReview />
        )}
        <button
          className={styles.toggleButton}
          onClick={() => setLayout(layout === 'romdol' ? 'kfc' : 'romdol')}
        >
          Toggle Layout ({layout === 'romdol' ? 'Romdol' : 'KFC'})
        </button>
      </main>
    </div>
  );
}

export default App;