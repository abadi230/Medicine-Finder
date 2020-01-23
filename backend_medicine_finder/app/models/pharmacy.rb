class Pharmacy < ApplicationRecord
    has_many :DrugPharmacy
    has_many :Drug, through: :DrugPharmacy
end
