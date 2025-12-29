import React, { useEffect, useState } from 'react';
import { FaSearch, FaEdit } from 'react-icons/fa';
import { MdAddCircle, MdDelete } from 'react-icons/md';
import axiosInstance from '../../axios/axiosInstance';
import Wrapper from './style';
import Loader from "../../components/Loader";
import ActionLoader from "../../components/ActionLoader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

const PlanManagement = () => {
  const [plans, setPlans] = useState([]);
  const [search, setSearch] = useState('');
  const [modalType, setModalType] = useState('');
  const [currentPlan, setCurrentPlan] = useState({});
  const [tempPlan, setTempPlan] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  // 🔹 Fetch plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axiosInstance.get("/api/admin/plans");
        setPlans(res.data.data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  // 🔹 Toggle active
  const handleToggleStatus = async (plan) => {
    try {
      await axiosInstance.put(`/api/admin/plans/${plan.id}`, {
        is_active: !plan.is_active
      });
      setPlans(prev =>
        prev.map(p =>
          p.id === plan.id ? { ...p, is_active: !p.is_active } : p
        )
      );
      toast.success("Plan status updated");
    } catch {
      toast.error("Failed to update status");
    }
  };

  // 🔹 Modal handlers
  const openModal = (type, plan = {}) => {
    setModalType(type);
    if (type === 'edit') {
      setCurrentPlan(plan);
      setTempPlan(plan);
      setIsEditing(false);
    } else {
      setTempPlan({
        name: '',
        price: '',
        duration_in_days: '',
        features: '',
        lead_limit: '',
        event_limit: '',
        is_active: true
      });
    }
  };

  const closeModal = () => {
    setModalType('');
    setTempPlan({});
    setCurrentPlan({});
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTempPlan(currentPlan);
  };

  // 🔹 Bulk delete
  const handleBulkDeleteWithConfirm = () => {
    const ids = plans.filter(p => p.selected).map(p => p.id);
    if (!ids.length) return toast.error("No plans selected");

    confirmAlert({
      title: "Confirm Delete",
      message: `Delete ${ids.length} plan(s)?`,
      buttons: [
        { label: "Yes", onClick: handleBulkDelete },
        { label: "No" }
      ]
    });
  };

  const handleBulkDelete = async () => {
    setActionLoading(true);
    try {
      const ids = plans.filter(p => p.selected).map(p => p.id);
      await Promise.all(ids.map(id => axiosInstance.delete(`/api/admin/plans/${id}`)));
      setPlans(prev => prev.filter(p => !ids.includes(p.id)));
      toast.success("Plans deleted");
    } catch {
      toast.error("Delete failed");
    } finally {
      setActionLoading(false);
    }
  };

  // 🔹 Save plan
  const handleSavePlan = async () => {
    setActionLoading(true);
    try {
      const payload = {
        name: tempPlan.name,
        price: Number(tempPlan.price) || 0,
        duration_in_days: Number(tempPlan.duration_in_days),
        is_active: tempPlan.is_active,
        lead_limit: tempPlan.lead_limit === '' ? null : Number(tempPlan.lead_limit),
        event_limit: tempPlan.event_limit === '' ? null : Number(tempPlan.event_limit),
        features: Array.isArray(tempPlan.features)
          ? tempPlan.features
          : tempPlan.features
            ?.split(",")
            .map(f => f.trim())
            .filter(Boolean)
      };

      if (modalType === 'add') {
        const res = await axiosInstance.post("/api/admin/plans/create", payload);
        setPlans(prev => [...prev, res.data.data]);
        toast.success("Plan created");
      } else {
        await axiosInstance.put(`/api/admin/plans/${tempPlan.id}`, payload);
        setPlans(prev =>
          prev.map(p => (p.id === tempPlan.id ? { ...p, ...payload } : p))
        );
        toast.success("Plan updated");
      }
      closeModal();
    } catch (e) {
      toast.error(e.response?.data?.message || "Save failed");
    } finally {
      setActionLoading(false);
      setIsEditing(false);
    }
  };

  if (loading) return <Loader loading />;

  return (
    <Wrapper>
      <div className="table-header">
        <section className="users">
          <h1>Plan Management</h1>

          <div className="search-container">
            <input
              className="search-input"
              placeholder="Search Plan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </div>

          <div className="button-wrapper">
            <div className="button-placeholder">
              <button
                className="bulk-delete-btn"
                onClick={handleBulkDeleteWithConfirm}
                style={{
                  visibility: plans.some(p => p.selected) ? 'visible' : 'hidden'
                }}
              >
                Delete <MdDelete size={26} />
              </button>

              <button
                className="add-btn"
                onClick={() => openModal('add')}
              >
                Add <MdAddCircle size={26} />
              </button>
            </div>
          </div>


        </section>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={
                    plans.length > 0 &&
                    plans.every(p => p.selected)
                  }
                  onChange={(e) =>
                    setPlans(prev =>
                      prev.map(p => ({
                        ...p,
                        selected: e.target.checked
                      }))
                    )
                  }
                />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plans
              .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
              .map(plan => (
                <tr key={plan.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={plan.selected || false}
                      onChange={() =>
                        setPlans(prev =>
                          prev.map(p =>
                            p.id === plan.id
                              ? { ...p, selected: !p.selected }
                              : p
                          )
                        )
                      }
                    />

                  </td>
                  <td>{plan.id}</td>
                  <td>{plan.name}</td>
                  <td>₹{plan.price}</td>
                  <td>{plan.duration_in_days} days</td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={plan.is_active}
                        onChange={() => handleToggleStatus(plan)}
                      />
                      <span className="slider"></span>
                    </label>
                  </td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => openModal('edit', plan)}
                    >
                      <FaEdit /> View/Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {modalType && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-scroll">
              <h3>
                {modalType === 'add'
                  ? 'Add Plan'
                  : isEditing
                    ? 'Edit Plan'
                    : 'Plan Details'}
              </h3>

              <div className="form-group">
                <label>Plan Name</label>
                <input
                  value={tempPlan.name || ''}
                  disabled={modalType === 'edit' && !isEditing}
                  onChange={e => setTempPlan({ ...tempPlan, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  value={tempPlan.price || ''}
                  disabled={modalType === 'edit' && !isEditing}
                  onChange={e => setTempPlan({ ...tempPlan, price: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Duration (days)</label>
                <input
                  type="number"
                  value={tempPlan.duration_in_days || ''}
                  disabled={modalType === 'edit' && !isEditing}
                  onChange={e =>
                    setTempPlan({ ...tempPlan, duration_in_days: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Lead Limit (empty = unlimited)</label>
                <input
                  type="number"
                  value={tempPlan.lead_limit ?? ''}
                  disabled={modalType === 'edit' && !isEditing}
                  onChange={e =>
                    setTempPlan({ ...tempPlan, lead_limit: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Event Limit (empty = unlimited)</label>
                <input
                  type="number"
                  value={tempPlan.event_limit ?? ''}
                  disabled={modalType === 'edit' && !isEditing}
                  onChange={e =>
                    setTempPlan({ ...tempPlan, event_limit: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Features (comma separated)</label>
                <textarea
                  value={
                    isEditing || modalType === 'add'
                      ? Array.isArray(tempPlan.features)
                        ? tempPlan.features.join(", ")
                        : tempPlan.features || ""
                      : (currentPlan.features || []).join(", ")
                  }
                  disabled={modalType === 'edit' && !isEditing}
                  onChange={(e) =>
                    setTempPlan({ ...tempPlan, features: e.target.value })
                  }
                  rows={4} style={{ resize: 'none', padding: '10px', fontSize: '16px', width: '90%', height: '100px' }}
                />
              </div>

              <div className="modal-buttons">
                {modalType === 'add' && (
                  <>
                    <div className="newsavebtn"><button onClick={handleSavePlan}>Save</button></div>
                    <div className="newclosebtn"><button onClick={closeModal}>Close</button></div>
                  </>
                )}
                {modalType === 'edit' && !isEditing && (
                  <>
                    <div className="newsavebtn"><button onClick={() => setIsEditing(true)}>Edit</button></div>
                    <div className="newclosebtn"><button onClick={closeModal}>Close</button></div>
                  </>
                )}
                {modalType === 'edit' && isEditing && (
                  <>
                    <div className="newsavebtn"><button onClick={handleSavePlan}>Save</button></div>
                    <div className="newclosebtn"><button onClick={handleCancelEdit}>Cancel</button></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {actionLoading && <ActionLoader />}
      <ToastContainer position="top-right" autoClose={3000} />
    </Wrapper>
  );
};

export default PlanManagement;
