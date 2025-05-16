// ./Admin/AdminAccountVerified.jsx
import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import './DashStyle/Dashboard.css';

// --- ASSET FALLBACKS ---
const defaultUserIcon =
  assets.user || 'https://placehold.co/36x36/e9ecef/333?text=U';
// --- END ASSET FALLBACKS ---

const INITIAL_ALL_ACCOUNTS_DATA = [
  {
    id: 'user1',
    image: assets.user1 || defaultUserIcon,
    username: 'Christine Crausus',
    idNumber: '202330405060',
    email: 'christinecrausus@gmail.com',
    dateApplied: 'March 30, 2025 1:30pm',
    status: 'confirmed',
    dateVerified: 'April 01, 2025 10:00am',
  },
  // … (unchanged seed data)
];

const AdminAccountVerified = () => {
  /* ---------------- STATE + STORAGE SYNC ---------------- */
  const [allAccounts, setAllAccounts] = useState(() => {
    const saved = localStorage.getItem('allAdminAccounts');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (_) { }
    }
    return INITIAL_ALL_ACCOUNTS_DATA;
  });

  useEffect(() => {
    localStorage.setItem('allAdminAccounts', JSON.stringify(allAccounts));
  }, [allAccounts]);

  /* ---------------- ACTION HANDLERS ---------------- */
  const handleAccountAction = (accountId, currentStatus) => {
    setAllAccounts(prev =>
      prev.map(acc => {
        if (acc.id !== accountId) return acc;

        if (currentStatus === 'confirmed')
          return { ...acc, status: 'suspended', dateSuspended: new Date().toLocaleString() };

        if (currentStatus === 'suspended')
          return { ...acc, status: 'confirmed', dateSuspended: null };

        if (currentStatus === 'rejected')
          return { ...acc, status: 'confirmed', dateVerified: new Date().toLocaleString() };

        return acc;
      })
    );
  };

  const handleVerifyDetails = accountId => {
    console.log('Re-verify details for', accountId);
  };

  /* ---------------- FILTER DISPLAY ---------------- */
  const managedAccounts = allAccounts.filter(acc =>
    ['confirmed', 'suspended', 'rejected'].includes(acc.status)
  );

  /* ---------------- RENDER ---------------- */
  return (
    <div className="existing-accounts-container">
      {managedAccounts.length ? (
        <>
          <h3 className="existing-accounts-section-title">EXISTING ACCOUNTS</h3>

          <div className="existing-accounts-table-layout">
            {/* --- TABLE HEADER --- */}
            <div className="existing-accounts-table-header">
              <div className="header-item va-username-col">USERNAME</div>
              <div className="header-item va-email-col">EMAIL</div>
              <div className="header-item va-date-applied-col">DATE APPLIED</div>
              <div className="header-item va-action-col">VERIFIED</div>
            </div>

            {/* --- TABLE BODY --- */}
            <div className="existing-accounts-table-body">
              {managedAccounts.map(acc => (
                <div key={acc.id} className="existing-account-row">
                  {/* USERNAME */}
                  <div className="account-cell va-username-col" data-label="Username:">
                    <img
                      src={acc.image || defaultUserIcon}
                      alt={acc.username}
                      className="account-user-image"
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = defaultUserIcon;
                      }}
                    />
                    <span>{acc.username}</span>
                  </div>

                  {/* EMAIL */}
                  <div className="account-cell va-email-col" data-label="Email:">
                    {acc.email}
                  </div>

                  {/* DATE APPLIED */}
                  <div
                    className="account-cell va-date-applied-col"
                    data-label="Date Applied:"
                  >
                    {acc.dateApplied && (
                      <>
                        {new Date(acc.dateApplied).toLocaleDateString(undefined, {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                        <br />
                        {new Date(acc.dateApplied).toLocaleTimeString(undefined, {
                          hour: 'numeric',
                          minute: '2-digit',
                          hour12: true,
                        })}
                      </>
                    )}
                  </div>

                  {/* ACTIONS */}
                  <div className="account-cell va-action-col" data-label="Action:">
                    {acc.status === 'confirmed' && (
                      <>
                        <button
                          className="btn-va-action btn-va-verify"
                          onClick={() => handleVerifyDetails(acc.id)}
                        >
                          Verify
                        </button>
                        <button
                          className="btn-va-action btn-va-suspend"
                          onClick={() => handleAccountAction(acc.id, 'confirmed')}
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {acc.status === 'suspended' && (
                      <button
                        className="btn-va-action btn-va-reinstate"
                        onClick={() => handleAccountAction(acc.id, 'suspended')}
                      >
                        Reinstate
                      </button>
                    )}

                    {acc.status === 'rejected' && (
                      <button
                        className="btn-va-action btn-va-approve"
                        onClick={() => handleAccountAction(acc.id, 'rejected')}
                      >
                        Approve
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="no-accounts-message">
          No existing accounts with status Confirmed, Suspended, or Rejected found.
        </p>
      )}
    </div>
  );
};

export default AdminAccountVerified;
