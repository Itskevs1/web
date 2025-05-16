// ./Admin/AdminAccountConfirmation.jsx
import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets'; // Adjust if necessary
import './DashStyle/Dashboard.css';      // Adjust if necessary

// --- ASSET FALLBACKS ---
const defaultUserIcon = assets.user || 'https://placehold.co/36x36/e9ecef/333?text=U';
const uploadIcon = assets.upload || 'https://placehold.co/20x20/6c757d/FFF?text=DOC&font=roboto';
const greenCheckIcon = assets.greencheck || 'https://placehold.co/24x24/28a745/FFFFFF?text=✔&font=montserrat';
const redXIcon = assets.redx || 'https://placehold.co/24x24/dc3545/FFFFFF?text=✕&font=montserrat';
// --- END ASSET FALLBACKS ---

const INITIAL_ALL_ACCOUNTS_DATA = [
  {
    id: 'user1',
    image: assets.user1 || defaultUserIcon,
    username: 'Christine Crausus',
    gcashRef: 'ACCIMG-20250330-001',
    gcashReceipt: 'IMG-2025-03-001',
    status: 'pending',
    idNumber: '202330405060',
    email: 'christine.c@example.com',
    dateApplied: 'March 30, 2025 1:30pm',
    dateVerified: null
  },
  {
    id: 'user2',
    image: assets.user2 || defaultUserIcon,
    username: 'John Doe',
    gcashRef: 'ACCIMG-20250402-002',
    gcashReceipt: 'IMG-2025-04-002',
    status: 'pending',
    idNumber: '202410203040',
    email: 'john.doe@example.com',
    dateApplied: 'April 02, 2025 10:00am',
    dateVerified: null
  },
  {
    id: 'user3',
    image: assets.user3 || defaultUserIcon,
    username: 'Alice Smith',
    gcashRef: 'ACCIMG-20250405-003',
    gcashReceipt: 'IMG-2025-05-003',
    status: 'pending',
    idNumber: '202205060708',
    email: 'alice.smith@example.net',
    dateApplied: 'April 05, 2025 02:15pm',
    dateVerified: null
  },
  {
    id: 'user4',
    image: assets.user4 || defaultUserIcon,
    username: 'Robert Brown',
    gcashRef: 'ACCIMG-20250501-004',
    gcashReceipt: 'IMG-2025-05-004',
    status: 'pending',
    idNumber: '202311223344',
    email: 'robert.b@example.io',
    dateApplied: 'May 01, 2025 09:00am',
    dateVerified: null
  },
];

const AdminAccountConfirmation = () => {
  const [allAccounts, setAllAccounts] = useState(() => {
    const savedAccounts = localStorage.getItem('allAdminAccountsPending');
    if (savedAccounts) {
      try {
        const parsed = JSON.parse(savedAccounts);
        if (parsed && parsed.length > 0 && parsed[0].hasOwnProperty('gcashRef')) {
          return parsed;
        }
      } catch (e) {
        console.error("Failed to parse accounts from localStorage", e);
      }
    }
    return INITIAL_ALL_ACCOUNTS_DATA;
  });

  useEffect(() => {
    const needsInitialization = () => {
      const currentStored = localStorage.getItem('allAdminAccountsPending');
      if (!currentStored) return true;
      try {
        const parsed = JSON.parse(currentStored);
        return !(parsed && parsed.length > 0 && parsed[0].hasOwnProperty('gcashRef'));
      } catch {
        return true;
      }
    };

    if (needsInitialization()) {
      localStorage.setItem('allAdminAccountsPending', JSON.stringify(INITIAL_ALL_ACCOUNTS_DATA));
      if (JSON.stringify(allAccounts) !== JSON.stringify(INITIAL_ALL_ACCOUNTS_DATA)) {
        setAllAccounts(INITIAL_ALL_ACCOUNTS_DATA);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('allAdminAccountsPending', JSON.stringify(allAccounts));
  }, [allAccounts]);

  const handleConfirmAccount = (accountId) => {
    setAllAccounts(prevAccounts =>
      prevAccounts.map(acc =>
        acc.id === accountId ? { ...acc, status: 'confirmed', dateVerified: new Date().toLocaleString() } : acc
      )
    );
  };

  const handleRejectAccount = (accountId) => {
    setAllAccounts(prevAccounts =>
      prevAccounts.map(acc =>
        acc.id === accountId ? { ...acc, status: 'rejected', dateVerified: new Date().toLocaleString() } : acc
      )
    );
  };

  const pendingAccountsToDisplay = allAccounts.filter(account => account.status === 'pending');

  return (
    <div className="accounts-confirmation-container">
      {pendingAccountsToDisplay.length > 0 ? (
        <>
          <h3 className="accounts-section-title">PENDING ACCOUNTS</h3>
          <div className="accounts-table-layout">
            <div className="accounts-table-header">
              <div className="header-item username-col">USERNAME</div>
              <div className="header-item gcash-ref-col">Gcash Payment Ref.</div>
              <div className="header-item gcash-receipt-col">Gcash Payment Receipt</div>
              <div className="header-item confirmation-col">CONFIRMATION</div>
            </div>
            <div className="accounts-table-body">
              {pendingAccountsToDisplay.map((account) => (
                <div key={account.id} className="account-row">
                  <div className="account-cell username-col" data-label="Username:">
                    <img
                      src={account.image}
                      alt={account.username}
                      className="account-user-image"
                      onError={(e) => { e.target.onerror = null; e.target.src = defaultUserIcon; }}
                    />
                    <span>{account.username}</span>
                  </div>
                  <div className="account-cell gcash-ref-col" data-label="Gcash Ref:">
                    <img src={uploadIcon} alt="ref icon" className="gcash-icon" />
                    <span>{account.gcashRef}</span>
                  </div>
                  <div className="account-cell gcash-receipt-col" data-label="Gcash Receipt:">
                    <img src={uploadIcon} alt="receipt icon" className="gcash-icon" />
                    <span>{account.gcashReceipt}</span>
                  </div>
                  <div className="account-cell confirmation-col" data-label="Action:">
                    <img
                      src={greenCheckIcon}
                      alt="Confirm"
                      className="confirmation-icon confirm-icon"
                      onClick={() => handleConfirmAccount(account.id)}
                      title="Confirm Account"
                    />
                    <img
                      src={redXIcon}
                      alt="Reject"
                      className="confirmation-icon reject-icon"
                      onClick={() => handleRejectAccount(account.id)}
                      title="Reject Account"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (<p className="no-accounts-message">No pending accounts for confirmation.</p>)}
    </div>
  );
};

export default AdminAccountConfirmation;