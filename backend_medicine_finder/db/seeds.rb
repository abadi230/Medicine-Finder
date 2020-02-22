# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# drugs = [
#   {
#     name: "Celapram Tablets",
#     active_ingredient: "Citalopram",
#     strength: "10mg, 20mg, 40mg",
#     image:
#       "https://www.nps.org.au/assets/medicines/c4f96e57-fcdd-41d4-8a71-a53300f27387.jpg"
#   },
#   {
#     name: "Dilaudid Tablets",
#     active_ingredient: "Hydromorphone hydrochloride",
#     strength: "2mg, 4mg, 8mg",
#     image:
#       "https://www.nps.org.au/assets/medicines/b4388e5f-ca76-481a-a06c-a53300e3561f.jpg"
#   },
#   {
#     name: "OxyContin Reformulated Modified release tablets",
#     active_ingredient: "Oxycodone hydrochloride",
#     strength: "10mg, 15mg, 20mg, 30mg, 40mg, 80mg",
#     image:
#       "https://www.nps.org.au/assets/medicines/68c16d04-a473-4c7c-b37d-a6da00bc7605.jpg"
#   },
#   {
#     name: "Plavix",
#     active_ingredient: "Clopidogrel",
#     strength: "75mg, 300mg",
#     image:
#       "https://www.nps.org.au/assets/medicines/4772e3a2-15fb-4896-a1ae-a53300f54adc.jpg"
#   }
# ];
# drugs.each do |drug|
#     Drug.create(drug)
# end

# pharmacies = [
#   { name: "Boot", location: "72 Ilkeston Rd, Nottingham, NG7 3GQ" },
#   {
#     name: "Applegate Pharmacy",
#     location: "132 Alfreton Rd, Nottingham, NG7 3NS"
#   },
#   {
#     name: "Tesco Pharmacy",
#     location: "1 Station Rd, Beeston, Nottingham, NG9 2WJ"
#   }
# ];
# pharmacies.each do |pharmacy|
#     Pharmacy.create(pharmacy)
# end

  d1 = Drug.create(
    name: "Celapram Tablets",
    active_ingredient: "Citalopram",
    strength: "10mg, 20mg, 40mg",
    image:
      "https://www.nps.org.au/assets/medicines/c4f96e57-fcdd-41d4-8a71-a53300f27387.jpg"
  )
  
  d2 = Drug.create(
    name: "Dilaudid Tablets",
    active_ingredient: "Hydromorphone hydrochloride",
    strength: "2mg, 4mg, 8mg",
    image:
      "https://www.nps.org.au/assets/medicines/b4388e5f-ca76-481a-a06c-a53300e3561f.jpg"
  )
 
  d3 = Drug.create(
    name: "OxyContin Reformulated Modified release tablets",
    active_ingredient: "Oxycodone hydrochloride",
    strength: "10mg, 15mg, 20mg, 30mg, 40mg, 80mg",
    image:
      "https://www.nps.org.au/assets/medicines/68c16d04-a473-4c7c-b37d-a6da00bc7605.jpg"
  )
  
  d4 = Drug.create(
    name: "Plavix",
    active_ingredient: "Clopidogrel",
    strength: "75mg, 300mg",
    image:
      "https://www.nps.org.au/assets/medicines/4772e3a2-15fb-4896-a1ae-a53300f54adc.jpg"
  )
  




  p1 = Pharmacy.create( name: "Boot", location: "72 Ilkeston Rd, Nottingham, NG7 3GQ" ) 
      
  p2 = Pharmacy.create(
    name: "Applegate Pharmacy",
    location: "132 Alfreton Rd, Nottingham, NG7 3NS"
  )
  
  p3 = Pharmacy.create(
    name: "Tesco Pharmacy",
    location: "1 Station Rd, Beeston, Nottingham, NG9 2WJ"
  )
  

DrugPharmacy.create(price: "£50",quantity: 5, drug: d1.id, pharmacy: p1.id)
DrugPharmacy.create(price: "£70.30",quantity: 3, drug: d2.id, pharmacy: p2.id)
DrugPharmacy.create(price: "£100",quantity: 1, drug: d3.id, pharmacy: p2.id)
DrugPharmacy.create(price: "£80",quantity: 9, drug: d4.id, pharmacy: p3.id)
DrugPharmacy.create(price: "£20",quantity: 3, drug: d2.id, pharmacy: p3.id)
DrugPharmacy.create(price: "£30",quantity: 2, drug: d1.id, pharmacy: p1.id)
DrugPharmacy.create(price: "£60",quantity: 7, drug: d3.id, pharmacy: p2.id)

