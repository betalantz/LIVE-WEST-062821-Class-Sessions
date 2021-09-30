# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding parks..."
p1 = Park.create(name: "Yosemite", votes: 10, image: "https://www.yosemitehikes.com/images/ns/lower-yosemite-falls-trailhead-700sq.jpg")
p2 = Park.create(name: "Zion", votes: 8, image: "https://i.natgeofe.com/n/6eff514d-9275-49e4-9c97-537877315f7d/01-zion-reference.jpg?w=636&h=434")
p3 = Park.create(name: "Yellowstone", votes: 9, image: "https://www.planetware.com/photos-large/USWY/usa-wyoming-yellowstone-grand-prismatic-spring.jpg")
p4 = Park.create(name: "Mount Rainier", votes: 12, image: "https://www.tehaleh.com/media/8070156/mt-rainier-paradise-1.png")