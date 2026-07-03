import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Mail, FileText, CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';
import { DOCTORS } from '../data';
import { Appointment } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctorId?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedDoctorId }: BookingModalProps) {
  const [formData, setFormData] = useState<Partial<Appointment>>({
    fullName: '',
    phone: '',
    email: '',
    department: '',
    doctor: preselectedDoctorId ? DOCTORS.find(d => d.id === preselectedDoctorId)?.name || '' : '',
    date: '',
    timeSlot: '',
    notes: '',
    insuranceType: 'None'
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const departments = [
    'Cardiovascular Care',
    'Pediatrics',
    'Neurology',
    'Obstetrics & Gynecology',
    'Orthopedics',
    'General Medicine'
  ];

  const filteredDoctors = formData.department 
    ? DOCTORS.filter(d => {
        if (formData.department === 'Cardiovascular Care') return d.specialty.includes('Cardio');
        if (formData.department === 'Pediatrics') return d.specialty.includes('Pediatric');
        if (formData.department === 'Neurology') return d.specialty.includes('Neurology');
        if (formData.department === 'Obstetrics & Gynecology') return d.specialty.includes('Obstetrics');
        if (formData.department === 'Orthopedics') return d.specialty.includes('Orthopedic');
        return true;
      })
    : DOCTORS;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call and success state
    const randomTicket = 'ANV-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(randomTicket);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      department: '',
      doctor: '',
      date: '',
      timeSlot: '',
      notes: '',
      insuranceType: 'None'
    });
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="booking-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          id="booking-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-slate-50 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Online Appointment</h3>
                <p className="text-xs text-slate-500">Fast & Secure Booking System</p>
              </div>
            </div>
            <button
              id="close-booking-modal"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 flex-1">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Section 1: Patient Information */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">1. Patient Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="johndoe@example.com"
                          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Clinical Selections */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">2. Clinical Department & Doctor</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Specialty Department *</label>
                      <select
                        required
                        value={formData.department}
                        onChange={e => setFormData({ ...formData, department: e.target.value, doctor: '' })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Doctor *</label>
                      <select
                        required
                        value={formData.doctor}
                        onChange={e => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                      >
                        <option value="">Select Doctor</option>
                        {filteredDoctors.map(doc => (
                          <option key={doc.id} value={doc.name}>
                            {doc.name} ({doc.specialty})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Appointment Date & Time */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">3. Schedule & Insurance</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={e => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Time Slot *</label>
                      <select
                        required
                        value={formData.timeSlot}
                        onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                      >
                        <option value="">Select Time</option>
                        <option value="09:00 - 10:00">09:00 AM - 10:00 AM</option>
                        <option value="10:00 - 11:00">10:00 AM - 11:00 AM</option>
                        <option value="11:00 - 12:00">11:00 AM - 12:00 PM</option>
                        <option value="13:00 - 14:00">01:00 PM - 02:00 PM</option>
                        <option value="14:00 - 15:00">02:00 PM - 03:00 PM</option>
                        <option value="15:00 - 16:00">03:00 PM - 04:00 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Insurance Plan *</label>
                      <select
                        required
                        value={formData.insuranceType}
                        onChange={e => setFormData({ ...formData, insuranceType: e.target.value as any })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                      >
                        <option value="None">Self Pay / No Insurance</option>
                        <option value="BPJS">National Health (BPJS)</option>
                        <option value="Private">Private Insurance</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Symptoms or Notes (Optional)</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <textarea
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Briefly describe your symptoms or medical concern..."
                      rows={3}
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                    />
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            ) : (
              /* Success / Ticket View */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 flex flex-col items-center text-center"
              >
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-1">Appointment Confirmed!</h4>
                <p className="text-slate-500 text-sm max-w-md mb-8">
                  Your appointment has been successfully scheduled. Please show this ticket on your mobile device at the reception counter upon arrival.
                </p>

                {/* High fidelity ticket graphic */}
                <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-md relative">
                  {/* Ticket top border */}
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                  <div className="p-6 space-y-4 text-left">
                    <div className="flex justify-between items-center pb-3 border-b border-dashed border-slate-200">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Booking ID</span>
                        <p className="text-lg font-mono font-bold text-blue-600">{ticketNumber}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Insurance</span>
                        <div className="flex items-center gap-1 text-slate-700 font-semibold text-xs mt-0.5 justify-end">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          {formData.insuranceType === 'None' ? 'Self Pay' : formData.insuranceType}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-xs text-slate-400 block">Patient Name</span>
                        <span className="font-semibold text-slate-800 block truncate">{formData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block">Department</span>
                        <span className="font-semibold text-slate-800 block truncate">{formData.department}</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block">Consultant</span>
                        <span className="font-semibold text-slate-800 block truncate">{formData.doctor}</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block">Date & Time</span>
                        <span className="font-semibold text-slate-800 block truncate">
                          {formData.date} at {formData.timeSlot?.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Barcode / QR Code Graphic */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col items-center justify-center space-y-2">
                      {/* Fake barcode lines */}
                      <div className="w-full h-12 flex items-stretch gap-[1px] bg-white p-2 border border-slate-200 rounded">
                        {Array.from({ length: 48 }).map((_, i) => (
                          <div
                            key={i}
                            style={{
                              width: (i % 3 === 0 ? '4px' : i % 5 === 0 ? '1px' : '2px'),
                              backgroundColor: i % 7 === 0 ? '#e2e8f0' : '#1e293b'
                            }}
                            className="h-full"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">Barcode Identification Scanner</span>
                    </div>
                  </div>

                  {/* Half-circles on sides to simulate cut tickets */}
                  <div className="absolute left-0 top-[108px] -translate-x-1/2 w-4 h-4 bg-white border-r border-slate-200 rounded-full"></div>
                  <div className="absolute right-0 top-[108px] translate-x-1/2 w-4 h-4 bg-white border-l border-slate-200 rounded-full"></div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      window.print();
                    }}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Print Ticket
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow"
                  >
                    Done & Close
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
