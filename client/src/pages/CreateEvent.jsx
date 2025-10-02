import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaImage, FaDollarSign, FaUsers } from 'react-icons/fa';
import toast from 'react-hot-toast';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: 'Technology',
    image: '',
    price: '',
    maxAttendees: '',
    ticketTypes: []
  });

  const categories = ['Cultural', 'Music', 'Business', 'Sports', 'Technology', 'Arts', 'Education', 'Lifestyle', 'Wellness', 'Food'];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Event created successfully!');
    console.log('Event Data:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
            Create Your Event
          </h1>
          <p className="text-xl text-gray-300 font-raleway" data-aos="fade-up" data-aos-delay="100">
            Fill in the details to create an amazing event
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6" data-aos="fade-up">
          {/* Event Title */}
          <div>
            <label className="block text-white font-semibold mb-2">Event Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter event title"
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-white font-semibold mb-2">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Describe your event"
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2 flex items-center">
                <FaCalendar className="mr-2 text-primary-400" />
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-white font-semibold mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-primary-400" />
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Event location"
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-white font-semibold mb-2">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-slate-800">{cat}</option>
              ))}
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-white font-semibold mb-2 flex items-center">
              <FaImage className="mr-2 text-primary-400" />
              Event Image URL *
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="https://example.com/image.jpg"
              className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Price and Max Attendees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2 flex items-center">
                <FaDollarSign className="mr-2 text-primary-400" />
                Ticket Price *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                placeholder="0"
                className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2 flex items-center">
                <FaUsers className="mr-2 text-primary-400" />
                Max Attendees *
              </label>
              <input
                type="number"
                name="maxAttendees"
                value={formData.maxAttendees}
                onChange={handleChange}
                required
                min="1"
                placeholder="100"
                className="w-full bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full btn-primary text-lg py-4"
          >
            Create Event
          </motion.button>
        </form>

        {/* Animation */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json"
            background="transparent"
            speed="1"
            style={{ width: '200px', height: '200px', margin: '0 auto' }}
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
