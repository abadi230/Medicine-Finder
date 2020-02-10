class DrugPharmacy < ApplicationRecord
    belongs_to :Pharmacy
    belongs_to :Drug
end
