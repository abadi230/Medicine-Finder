class DrugPharmacy < ApplicationRecord
  belongs_to :drug
  belongs_to :pharmacy
end
