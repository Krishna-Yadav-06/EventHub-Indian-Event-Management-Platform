import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import { FaRocket, FaChartLine, FaUsers, FaBullhorn } from 'react-icons/fa';
import { eventsData } from '../data/eventsData';

const Home = () => {
  // Featured Indian events
  const featuredEvents = eventsData.slice(0, 3);

  const features = [
    {
      icon: FaRocket,
      title: 'Easy Event Creation',
      description: 'Create stunning events in minutes with our intuitive interface'
    },
    {
      icon: FaChartLine,
      title: 'Real-time Analytics',
      description: 'Track registrations, engagement, and revenue in real-time'
    },
    {
      icon: FaUsers,
      title: 'Attendee Management',
      description: 'Manage attendees, tickets, and check-ins effortlessly'
    },
    {
      icon: FaBullhorn,
      title: 'Powerful Promotion',
      description: 'Reach your audience with integrated marketing tools'
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
              Why Choose EventHub?
            </h2>
            <p className="text-xl text-gray-300 font-raleway" data-aos="fade-up" data-aos-delay="100">
              Everything you need to create memorable events
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-8 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat" data-aos="fade-up">
              Featured Events
            </h2>
            <p className="text-xl text-gray-300 font-raleway" data-aos="fade-up" data-aos-delay="100">
              Discover amazing events happening near you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center" data-aos="fade-up">
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View All Events
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              Ready to Create Your Event?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-raleway">
              Join thousands of organizers who trust EventHub for their events
            </p>
            <Link to="/create-event">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg"
              >
                Get Started Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
