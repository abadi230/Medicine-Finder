class Drug < ApplicationRecord
    has_many :DrugPharmacy
    has_many :Pharmacy, through: :DrugPharmacy
end
