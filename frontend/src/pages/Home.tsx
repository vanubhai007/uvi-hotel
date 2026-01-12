import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wifi, Car, Coffee, Utensils, Waves } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
import heroImage from "@/assets/hotel-hero.jpg";
import deluxeSuite from "@/assets/deluxe-suite.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import spaAmenities from "@/assets/spa-amenities.jpg";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const featuredRooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: "$299",
      image: deluxeSuite,
      features: ["King Bed", "City View", "Mini Bar", "Balcony"],
    },
    {
      id: 2,
      name: "Standard Room",
      price: "$159",
      image: standardRoom,
      features: ["Queen Bed", "WiFi", "AC", "Room Service"],
    },
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Car, name: "Valet Parking" },
    { icon: Coffee, name: "Coffee Bar" },
    { icon: Utensils, name: "Fine Dining" },
    { icon: Waves, name: "Spa & Pool" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-gradient-gold">Uvi hotel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90">
            Experience luxury and comfort in the heart of the city
          </p>
          <div className="space-x-4 animate-slide-up">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/rooms">Explore Rooms</Link>
            </Button>
            {/* ✅ Fixed Book Now button */}
            <Button
              variant="hero"
              size="xl"
              onClick={() => navigate("/booking")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Featured <span className="text-gradient-gold">Rooms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of luxurious
              accommodations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredRooms.map((room) => (
              <Card
                key={room.id}
                className="overflow-hidden hover-scale shadow-luxury hover:shadow-gold transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold">{room.name}</h3>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-secondary">
                        {room.price}
                      </span>
                      <span className="text-muted-foreground">/night</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/rooms">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              World-Class <span className="text-gradient-gold">Amenities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for an unforgettable stay
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="text-center group">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-gold transition-all duration-300">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {amenity.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/amenities">Explore All Amenities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-secondary text-secondary"
                />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-muted-foreground mb-6">
              "An exceptional experience from start to finish. Uvi Hotel
              exceeded every expectation."
            </blockquote>
            <cite className="text-lg font-semibold text-foreground">
              - vanu sankhat, Verified Guest
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
